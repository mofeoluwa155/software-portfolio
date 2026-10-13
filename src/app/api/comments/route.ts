
import { NextRequest, NextResponse } from "next/server";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebase-admin";

const allowedSlugs = new Set([
  "building-modupath",
  "building-modi",
  "developer-challenges",
]);

const hashToken = (token: string) =>
  createHash("sha256").update(token).digest("hex");

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  return left.length === right.length && timingSafeEqual(left, right);
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  if (!slug || !allowedSlugs.has(slug)) {
    return NextResponse.json({ error: "Invalid article." }, { status: 400 });
  }

  try {
    const snapshot = await adminDb
      .collection("blogComments")
      .where("slug", "==", slug)
      .orderBy("createdAt", "desc")
      .limit(100)
      .get();

    const comments = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        name: data.name,
        text: data.text,
        createdAt: data.createdAt?.toDate?.().toISOString() ?? null,
      };
    });

    return NextResponse.json(
      { comments },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[Comments API] Failed to load comments:", error);

    return NextResponse.json(
      { error: "Unable to load comments." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const slug = typeof body.slug === "string" ? body.slug : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const website = typeof body.website === "string" ? body.website : "";

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!allowedSlugs.has(slug)) {
      return NextResponse.json({ error: "Invalid article." }, { status: 400 });
    }

    if (name.length < 2 || name.length > 40) {
      return NextResponse.json(
        { error: "Name must be between 2 and 40 characters." },
        { status: 400 },
      );
    }

    if (text.length < 3 || text.length > 1000) {
      return NextResponse.json(
        { error: "Comment must be between 3 and 1000 characters." },
        { status: 400 },
      );
    }

    const ownershipToken = randomBytes(32).toString("base64url");

    const doc = await adminDb.collection("blogComments").add({
      slug,
      name,
      text,
      ownershipTokenHash: hashToken(ownershipToken),
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json(
      {
        success: true,
        commentId: doc.id,
        ownershipToken,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[Comments API] Failed to submit comment:", error);

    return NextResponse.json(
      { error: "Unable to submit your comment right now." },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();

    const commentId =
      typeof body.commentId === "string" ? body.commentId : "";
    const ownershipToken =
      typeof body.ownershipToken === "string" ? body.ownershipToken : "";

    if (
      !/^[a-zA-Z0-9]{10,40}$/.test(commentId) ||
      !/^[A-Za-z0-9_-]{30,100}$/.test(ownershipToken)
    ) {
      return NextResponse.json(
        { error: "Invalid deletion request." },
        { status: 400 },
      );
    }

    const ref = adminDb.collection("blogComments").doc(commentId);
    const snapshot = await ref.get();

    if (!snapshot.exists) {
      return NextResponse.json(
        { error: "Comment not found." },
        { status: 404 },
      );
    }

    const storedHash = snapshot.data()?.ownershipTokenHash;

    if (
      typeof storedHash !== "string" ||
      !safeEqual(hashToken(ownershipToken), storedHash)
    ) {
      return NextResponse.json(
        { error: "You cannot delete this comment from this browser." },
        { status: 403 },
      );
    }

    await ref.delete();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Comments API] Failed to delete comment:", error);

    return NextResponse.json(
      { error: "Unable to delete this comment right now." },
      { status: 500 },
    );
  }
}
