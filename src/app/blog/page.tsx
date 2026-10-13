import Link from "next/link";

const articles = [
  {
    number: "01",
    category: "BUILDING MODUPATH",
    title: "How I'm Building Modupath, My Educational Platform",
    description:
      "The idea behind Modupath, the problems I'm exploring and my journey building an educational technology platform as a student developer.",
    slug: "building-modupath",
    readTime: "5 min read",
  },
  {
    number: "02",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Building Modi: Lessons From Creating an AI Learning Assistant",
    description:
      "What I've learned from integrating AI into an educational project, testing responses and investigating performance issues.",
    slug: "building-modi",
    readTime: "6 min read",
  },
  {
    number: "03",
    category: "SOFTWARE ENGINEERING",
    title: "Five Technical Challenges I've Faced as a Student Developer",
    description:
      "A practical look at debugging, deployment, testing, performance and the lessons that come from building real projects.",
    slug: "developer-challenges",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#080a0f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-bold text-cyan-300">
              MR
            </span>
            <span className="font-semibold tracking-tight">
              Software Portfolio
            </span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            ← Back home
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute right-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Notes from the development journey
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            Ideas, lessons
            <br />
            and <span className="text-cyan-300">experiments.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            I&apos;m Akintayo Mofeoluwa Richard, a student developer exploring
            software engineering, artificial intelligence and educational
            technology. This is where I document what I build, what I learn
            and the challenges I work through.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-sm text-gray-400">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Software development
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              AI experiments
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Learning in public
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                The blog
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Explore the articles.
              </h2>
            </div>
            <p className="text-sm text-gray-500">
              Thoughts, progress and practical lessons
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-cyan-300">
                    {article.number}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.readTime}
                  </span>
                </div>

                <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-gray-500">
                  {article.category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight">
                  {article.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-gray-400">
                  {article.description}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                >
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] to-transparent p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Building in public
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Every project teaches you something.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-gray-400">
              My goal is to share honest development experiences, explain
              technical ideas clearly and document how my projects evolve
              over time.
            </p>
            <Link
              href="/projects/modi"
              className="mt-7 inline-flex rounded-full bg-cyan-300 px-6 py-3 font-semibold text-[#081015] transition hover:bg-cyan-200"
            >
              Explore the Modi case study →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <Link href="/" className="transition hover:text-cyan-300">
            Akintayo Mofeoluwa Richard
          </Link>
          <p>Software portfolio · Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
