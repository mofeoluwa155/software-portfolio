
import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Learning support",
    description:
      "Modi is designed to help students ask questions, explore unfamiliar topics and learn through AI-assisted conversations.",
  },
  {
    number: "02",
    title: "Connected learning",
    description:
      "Modupath brings learning tools, subject exploration and future planning together in a broader educational platform.",
  },
  {
    number: "03",
    title: "Student-centred design",
    description:
      "The vision is to make digital learning easier to navigate, accessible to students and useful for their educational journey.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Firebase",
  "Firestore",
  "Groq",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080a0f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-bold text-cyan-300">
              MR
            </span>
            <span className="font-semibold tracking-tight">
              Software Portfolio
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
            <a href="#modupath" className="transition hover:text-cyan-300">
              Modupath
            </a>
            <a href="#modi" className="transition hover:text-cyan-300">
              Modi AI
            </a>
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
          </div>

          <a
            href="#about"
            className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Meet the developer ↗
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="pointer-events-none absolute right-0 top-10 -z-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative z-10 max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Student developer · Building with purpose
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Software · Education · Artificial intelligence
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            Ideas into
            <br />
            <span className="text-gray-500">digital</span>{" "}
            <span className="text-cyan-300">experiences.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            I am Akintayo Mofeoluwa Richard, a student developer interested
            in software engineering and AI. I build projects to explore
            how technology can solve practical problems, starting with
            education.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#modupath"
              className="rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-[#081015] transition hover:bg-cyan-200"
            >
              Explore my work ↓
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/15 px-6 py-3.5 font-medium transition hover:border-white/40"
            >
              About me
            </a>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="border-l border-cyan-300/50 pl-4">
              <p className="text-xl font-semibold">Education</p>
              <p className="mt-1 text-sm text-gray-500">
                Technology for students
              </p>
            </div>
            <div className="border-l border-cyan-300/50 pl-4">
              <p className="text-xl font-semibold">AI + Web</p>
              <p className="mt-1 text-sm text-gray-500">
                Areas of development
              </p>
            </div>
            <div className="col-span-2 border-l border-cyan-300/50 pl-4 sm:col-span-1">
              <p className="text-xl font-semibold">Always improving</p>
              <p className="mt-1 text-sm text-gray-500">
                Learn, test, refine
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="modupath"
        className="border-y border-white/[0.07] bg-white/[0.02] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Featured project · Education technology
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Modupath
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Your learning. Your pieces. Your path.
            </p>

            <div className="mt-7 space-y-5 leading-8 text-gray-400">
              <p>
                Modupath is an educational technology platform project
                I am developing to bring different parts of a student&apos;s
                learning journey into one place. Its wider direction is to
                help learners explore subjects, develop their understanding
                and think about possible future careers.
              </p>
              <p>
                Rather than treating AI as the whole product, Modupath
                places an AI learning assistant alongside a wider set of
                student-focused tools and experiences.
              </p>
              <p>
                The project is still evolving. I continue to test the
                application, fix issues, investigate performance and
                improve its design and functionality.
              </p>
            </div>

            <a
              href="/projects/modi"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-[#081015] transition hover:bg-cyan-200"
            >
              Explore the project case study ↗
            </a>
          </div>

          <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] to-white/[0.02] p-6 sm:p-10">
            <div className="rounded-2xl border border-white/10 bg-[#080a0f] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-xl font-bold text-cyan-300">
                  M
                </span>
                <div>
                  <p className="font-semibold">Modupath</p>
                  <p className="text-sm text-gray-500">
                    A connected learning experience
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  ["Learn", "Explore subjects and understand concepts"],
                  ["Discover", "Investigate interests and careers"],
                  ["Get guidance", "Use AI-assisted learning support"],
                  ["Develop", "Build knowledge and learning habits"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                  >
                    <p className="font-medium text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-gray-500">
                Illustrative overview of the product vision, not a claim
                that every capability is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="modi" className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Inside Modupath
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Meet Modi.
              </h2>
              <p className="mt-5 text-xl leading-8 text-gray-400">
                An AI learning assistant designed to support the wider
                student experience.
              </p>
              <div className="mt-7 space-y-5 leading-8 text-gray-400">
                <p>
                  Modi is the AI assistant within Modupath. It gives students
                  a conversational way to ask questions and seek help
                  understanding topics. It is one component of the platform,
                  not the platform itself.
                </p>
                <p>
                  The application uses Groq for language-model inference.
                  Its wider web application uses Next.js and React, with
                  Firebase authentication and Firestore data storage.
                </p>
                <p>
                  An important part of the ongoing work is making the
                  experience more reliable and responsive. That includes
                  investigating slow responses, testing changes and
                  improving how the interface communicates while the
                  AI is processing a request.
                </p>
              </div>

              <a
                href="/projects/modi"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Read the Modi case study <span>↗</span>
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
              <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-xl font-bold text-[#081015]">
                  M
                </div>
                <div>
                  <p className="font-semibold">Modi AI</p>
                  <p className="text-sm text-gray-500">
                    Learning assistant concept
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Student
                </p>
                <p className="mt-2 leading-7 text-gray-300">
                  Can you help me understand a topic I find difficult?
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
                <p className="text-xs uppercase tracking-wider text-cyan-300">
                  Modi · Intended experience
                </p>
                <p className="mt-2 leading-7 text-gray-300">
                  Let&apos;s break the topic into smaller parts and work
                  through the ideas step by step.
                </p>
              </div>

              <p className="mt-5 text-xs leading-5 text-gray-500">
                Illustrative conversation for this portfolio, not a live
                response from the application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Technology
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Tools behind the project.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            These technologies support different parts of the Modupath
            project, from the user interface and data storage to AI responses.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3 text-sm text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="rounded-2xl border border-white/10 p-6"
              >
                <p className="text-sm text-cyan-300">{capability.number}</p>
                <h3 className="mt-5 text-xl font-semibold">
                  {capability.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#11151d] p-3">
              <Image
                src="/profile.png"
                alt="Portrait of Akintayo Mofeoluwa Richard"
                width={600}
                height={750}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              About the developer
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Akintayo Mofeoluwa Richard.
            </h2>
            <p className="mt-4 text-lg text-cyan-300">
              Student developer · Creator of Modi and Modupath
            </p>

            <div className="mt-7 space-y-5 leading-8 text-gray-400">
              <p>
                I am a student studying S4 National 5 in Scotland,
                United Kingdom. I am interested in software engineering,
                artificial intelligence and building technology that
                solves practical problems.
              </p>
              <p>
                I began working on Modi on 10 January 2024. Over time,
                it became part of my broader Modupath educational
                technology project.
              </p>
              <p>
                On 9 October 2026, I reached a major development
                milestone. The project is still evolving, and I continue
                to fix issues, investigate performance, test changes
                and improve the experience every day.
              </p>
              <p>
                This portfolio documents my work and learning journey.
                I believe becoming a better developer means being
                willing to experiment, identify mistakes, solve problems
                and keep improving.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Software engineering",
                "Artificial intelligence",
                "Educational technology",
                "Continuous improvement",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] to-transparent p-8 sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            The journey continues
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Build. Learn. Improve. Repeat.
          </h2>
          <p className="mt-6 max-w-2xl leading-7 text-gray-400">
            Modupath is an ongoing project. My goal is to keep developing
            my skills and build educational software that is useful,
            thoughtful and reliable.
          </p>
          <a
            href="/projects/modi"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-[#081015] transition hover:bg-cyan-200"
          >
            Explore the Modi case study ↗
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p></p>
          <p>Software portfolio · Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
