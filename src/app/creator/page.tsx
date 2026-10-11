import type { Metadata } from "next";

const baseUrl = "https://software-portfolio-five-pi.vercel.app";

export const metadata: Metadata = {
  title: "Akintayo Mofeoluwa Richard | Software Developer & Creator",
  description:
    "Meet Akintayo Mofeoluwa Richard, a student developer exploring software engineering, AI and education technology. Discover his work on Modupath and Modi.",
  alternates: {
    canonical: `${baseUrl}/creator`,
  },
  openGraph: {
    title: "Akintayo Mofeoluwa Richard | Software Developer & Creator",
    description:
      "A student developer exploring software, artificial intelligence and education technology.",
    url: `${baseUrl}/creator`,
    type: "profile",
  },
};

const focusAreas = [
  {
    number: "01",
    title: "Education Technology",
    description:
      "Exploring how digital tools can help students organise learning, practise skills and plan their future.",
  },
  {
    number: "02",
    title: "Artificial Intelligence",
    description:
      "Developing Modi, an AI learning assistant within the wider Modupath educational platform.",
  },
  {
    number: "03",
    title: "Software Engineering",
    description:
      "Building web applications, learning through practical projects and improving software development skills.",
  },
];

export default function CreatorPage() {
  return (
    <main className="min-h-screen bg-[#080a0f] text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="font-semibold tracking-wide">
            MO-LEGEND
          </a>
          <a
            href="/"
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-cyan-300"
          >
            Portfolio Home
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Student Developer Â· AI Â· Education
        </p>

        <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Akintayo Mofeoluwa Richard
        </h1>

        <p className="mt-7 max-w-3xl text-xl leading-8 text-gray-300">
          Student developer and creator exploring how software and artificial
          intelligence can support learning.
        </p>

        <p className="mt-5 max-w-3xl leading-8 text-gray-400">
          I learn by building practical projects: identifying problems, designing
          digital experiences, writing code, testing ideas and improving the
          results. My work includes Modupath, an educational platform, and Modi,
          its AI learning assistant.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="/projects/modi"
            className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
          >
            Explore the Modi Project â†—
          </a>
          <a
            href="https://github.com/mofeoluwa155"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 hover:border-cyan-300"
          >
            GitHub Profile â†—
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Areas of Focus
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          What I am working towards
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="font-semibold text-cyan-300">{area.number}</p>
              <h3 className="mt-5 text-xl font-semibold">{area.title}</h3>
              <p className="mt-3 leading-7 text-gray-400">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-bold">Modupath and Modi</h2>
          <p className="mt-5 max-w-3xl leading-8 text-gray-300">
            Modupath is an educational platform concept focused on helping
            students organise learning and explore future pathways. Modi is its
            AI learning assistant, designed to help students ask questions and
            work through topics. Both are ongoing development projects.
          </p>
          <a
            href="/projects/modi"
            className="mt-6 inline-block font-semibold text-cyan-300 hover:text-cyan-200"
          >
            Read the project case study â†—
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
          Copyright 2026 Akintayo Mofeoluwa Richard
          <a href="/" className="ml-2 hover:text-cyan-300">
            Return to portfolio
          </a>
        </div>
      </footer>
    </main>
  );
}



