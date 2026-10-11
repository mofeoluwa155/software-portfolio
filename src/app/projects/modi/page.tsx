
const sections = [
  {
    number: "01",
    title: "The problem",
    body:
      "Students can have difficulty organising their learning, understanding unfamiliar topics and connecting what they study with their future goals. Modi was designed as part of a broader attempt to make digital learning guidance more accessible.",
  },
  {
    number: "02",
    title: "The solution",
    body:
      "Modi is the AI learning assistant within Modupath. The intended experience is conversational: students ask questions, seek explanations and receive guidance that supports their learning rather than simply replacing their own effort.",
  },
  {
    number: "03",
    title: "The design approach",
    body:
      "The product is organised around a wider learning platform rather than treating a chat window as the entire experience. Learning tools, student-facing features and a consistent interface help connect the assistant to the wider product.",
  },
  {
    number: "04",
    title: "How the AI works",
    body:
      "The application sends a user's question to its AI service, which generates a response that the interface displays. The project uses Groq for language-model inference. The exact context, data retrieval and error-handling behaviour depend on the implemented application code and configuration.",
  },
  {
    number: "05",
    title: "Technology and architecture",
    body:
      "The broader project uses Next.js and React for its web interface, Firebase for authentication and Firestore data storage, and Groq for AI responses. These technologies serve different roles: interface rendering, account access, persistence and language-model inference.",
  },
  {
    number: "06",
    title: "Challenges and improvement",
    body:
      "AI response time is an important engineering challenge. A useful next step is to measure request duration, separate model-generation time from other server work, inspect logs and improve loading feedback. AI-generated answers also need careful evaluation because they can be incorrect.",
  },
];

export default function ModiCaseStudy() {
  return (
    <main className="min-h-screen bg-[#080a0f] text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="font-semibold tracking-tight hover:text-cyan-300">
            MR <span className="text-gray-500">/ Portfolio</span>
          </a>
          <a
            href="/#work"
            className="text-sm text-gray-400 transition hover:text-cyan-300"
          >
            ← All projects
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Project case study · 01
          </p>
          <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-2xl font-bold text-cyan-300">
            M
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            Meet Modi.
            <br />
            <span className="text-gray-500">AI for learning,</span>
            <br />
            built into a bigger idea.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Modi is the AI learning assistant within Modupath, an educational
            platform project focused on helping students learn, explore and
            plan their next steps.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Next.js", "React", "Firebase", "Firestore", "Groq"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.7fr_1.3fr]">
        <aside>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            At a glance
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm text-gray-500">Project</p>
              <p className="mt-1 font-medium">Modi / Modupath</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-1 font-medium">Education technology · AI</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Developer&apos;s focus</p>
              <p className="mt-1 font-medium">Product design and engineering</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Project status</p>
              <p className="mt-1 font-medium">Ongoing development</p>
            </div>
          </div>
        </aside>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Inside the project
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            More than a chat interface.
          </h2>
          <p className="mt-6 leading-8 text-gray-400">
            The goal is to make Modi part of a broader learning experience.
            That means considering not only how the AI responds, but also how
            students navigate the product, access learning features and make
            use of the information they receive.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            This case study describes the project&apos;s intended design and
            its known technology choices. Actual capabilities should be
            checked against the current implementation rather than assumed
            from the product idea alone.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Design and engineering
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            From an idea to a working product.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.number}
                className="rounded-3xl border border-white/10 bg-[#080a0f] p-7 sm:p-8"
              >
                <p className="text-sm text-cyan-300">{section.number}</p>
                <h3 className="mt-5 text-xl font-semibold">{section.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          What comes next
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Build, measure, learn and improve.
        </h2>
        <p className="mt-6 max-w-3xl leading-8 text-gray-400">
          Future work can focus on faster responses, clear error messages,
          reliable AI behaviour, accessibility, testing and feedback from
          students and educators. These are development priorities, not
          claims that every improvement has already been completed.
        </p>

        <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-8 sm:p-10">
          <h3 className="text-2xl font-semibold">The bigger vision</h3>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Build learning software that helps students understand their
            options, develop useful skills and take greater ownership of
            their learning.
          </p>
          <a
            href="/#work"
            className="mt-7 inline-flex items-center gap-2 font-medium text-cyan-300 hover:text-cyan-200"
          >
            Return to the portfolio ↗
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <a href="/" className="hover:text-white">
            MR · Software Portfolio
          </a>
          <p>Project documentation and learning in progress.</p>
        </div>
      </footer>
    </main>
  );
}
