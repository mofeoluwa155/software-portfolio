
"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type CommentItem = {
  id: string;
  name: string;
  text: string;
  createdAt: string | null;
};

type Props = {
  slug: string;
};

type OwnershipTokens = Record<string, string>;

const STORAGE_KEY = "portfolio-comment-ownership-v1";

function readOwnershipTokens(): OwnershipTokens {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return {};

    const parsed: unknown = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([id, token]) =>
          /^[a-zA-Z0-9]{10,40}$/.test(id) &&
          typeof token === "string" &&
          /^[A-Za-z0-9_-]{30,100}$/.test(token),
      ),
    );
  } catch {
    return {};
  }
}

export default function Comments({ slug }: Props) {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [ownershipTokens, setOwnershipTokens] = useState<OwnershipTokens>({});
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [deletingId, setDeletingId] = useState("");

  const loadComments = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/comments?slug=${encodeURIComponent(slug)}`,
        { cache: "no-store" },
      );

      if (!response.ok) throw new Error("Could not load comments.");

      const data = await response.json();
      setComments(Array.isArray(data.comments) ? data.comments : []);
    } catch {
      setError("Comments could not be loaded. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    setOwnershipTokens(readOwnershipTokens());
    void loadComments();
  }, [loadComments]);

  function saveOwnershipToken(commentId: string, token: string) {
    const updated = {
      ...readOwnershipTokens(),
      [commentId]: token,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setOwnershipTokens(updated);
    } catch {
      setError(
        "Your comment was published, but this browser could not save its delete permission. You may not be able to delete it yourself.",
      );
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");

    if (name.trim().length < 2 || text.trim().length < 3) {
      setError("Enter your name and a comment before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          name: name.trim(),
          text: text.trim(),
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Your comment could not be submitted.");
      }

      if (
        typeof data.commentId === "string" &&
        typeof data.ownershipToken === "string"
      ) {
        saveOwnershipToken(data.commentId, data.ownershipToken);
      }

      setName("");
      setText("");
      setWebsite("");
      setNotice("Your comment has been published.");
      await loadComments();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Your comment could not be submitted.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(comment: CommentItem) {
    const ownershipToken = ownershipTokens[comment.id];
    if (!ownershipToken) return;

    const confirmed = window.confirm(
      "Delete your comment? This cannot be undone.",
    );
    if (!confirmed) return;

    setError("");
    setNotice("");
    setDeletingId(comment.id);

    try {
      const response = await fetch("/api/comments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          commentId: comment.id,
          ownershipToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Could not delete this comment.");
      }

      const updated = { ...ownershipTokens };
      delete updated[comment.id];

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // The comment has already been deleted on the server.
      }

      setOwnershipTokens(updated);
      setNotice("Your comment has been deleted.");
      await loadComments();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not delete this comment.",
      );
    } finally {
      setDeletingId("");
    }
  }

  return (
    <section id="comments" className="mt-16 border-t border-white/10 pt-10">
      <h2 className="text-2xl font-semibold text-white">Comments</h2>
      <p className="mt-2 text-sm text-white/60">
        Share your thoughts or ask a question about this article.
      </p>

      {error && (
        <p role="alert" className="mt-4 text-sm text-red-300">
          {error}
        </p>
      )}

      {notice && (
        <p role="status" className="mt-4 text-sm text-cyan-200">
          {notice}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="comment-name"
            className="mb-2 block text-sm text-white/80"
          >
            Display name
          </label>
          <input
            id="comment-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={40}
            minLength={2}
            required
            autoComplete="nickname"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="comment-text"
            className="mb-2 block text-sm text-white/80"
          >
            Your comment
          </label>
          <textarea
            id="comment-text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            maxLength={1000}
            minLength={3}
            required
            rows={5}
            className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300"
            placeholder="Write something useful or constructive..."
          />
          <p className="mt-1 text-right text-xs text-white/40">
            {text.length}/1000
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor="comment-website">Leave this field empty</label>
          <input
            id="comment-website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Publishing..." : "Publish comment"}
        </button>
      </form>

      <div className="mt-10 space-y-5">
        <h3 className="text-lg font-medium text-white">
          Recent comments ({comments.length})
        </h3>

        {loading ? (
          <p className="text-sm text-white/50">Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-white/50">
            No comments yet. Start the conversation.
          </p>
        ) : (
          comments.map((comment) => {
            const canDelete = Boolean(ownershipTokens[comment.id]);

            return (
              <article
                key={comment.id}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-medium text-white">{comment.name}</h4>

                  <div className="flex items-center gap-3">
                    {comment.createdAt && (
                      <time
                        dateTime={comment.createdAt}
                        className="text-xs text-white/40"
                      >
                        {new Date(comment.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </time>
                    )}

                    {canDelete && (
                      <button
                        type="button"
                        onClick={() => void handleDelete(comment)}
                        disabled={deletingId === comment.id}
                        aria-label={`Delete your comment by ${comment.name}`}
                        title="Delete your comment"
                        className="rounded-lg border border-red-300/20 p-2 text-red-300 transition hover:bg-red-300/10 hover:text-red-200 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {deletingId === comment.id ? (
                          <span className="text-xs">...</span>
                        ) : (
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="m19 6-1 14H6L5 6" />
                            <path d="M10 11v5M14 11v5" />
                          </svg>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-white/70">
                  {comment.text}
                </p>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
