
import type { Metadata } from "next";
import Image from "next/image";

const baseUrl = "https://software-portfolio-five-pi.vercel.app";

export const metadata: Metadata = {
  title:
    "Akintayo Mofeoluwa Richard | Software Developer, Graphic Designer & Web Designer",
  description:
    "Explore the portfolio of Akintayo Mofeoluwa Richard, a student software developer, graphic designer and web designer building digital experiences, educational technology and AI projects.",
  alternates: {
    canonical: `${baseUrl}/creator`,
  },
  openGraph: {
    title:
      "Akintayo Mofeoluwa Richard | Software Developer, Graphic Designer & Web Designer",
    description:
      "Software development, graphic design, web design and educational technology projects by Akintayo Mofeoluwa Richard.",
    url: `${baseUrl}/creator`,
    type: "profile",
    images: [
      {
        url: `${baseUrl}/profile.png`,
        alt: "Akintayo Mofeoluwa Richard profile picture",
      },
    ],
  },
};

const focusAreas = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building web applications and learning through practical projects, testing and continuous improvement.",
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Creating visual identities, logos, flyers and digital graphics through Riche Riche Digital Media Designer.",
  },
  {
    number: "03",
    title: "Web Design",
    description:
      "Designing websites and digital experiences with a focus on usability, presentation and responsive layouts.",
  },
  {
    number: "04",
    title: "Artificial Intelligence",
    description:
      "Exploring AI-powered tools and building Modi, an AI learning assistant within the Modupath platform.",
  },
  {
    number: "05",
    title: "Education Technology",
    description:
      "Developing ideas that help students organise their learning, practise skills and explore future careers.",
  },
  {
    number: "06",
    title: "Creative Problem-Solving",
    description:
      "Combining design and technology to turn ideas into practical digital projects.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Firebase",
  "Firestore",
  "Groq",
  "HTML",
  "CSS",
];

export default function CreatorPage() {
  return (
    <main className="min-h-screen bg-[#080a0f] text-white">
      <header className="border-b border-white/10">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
        >
          <a href="/" className="font-semibold tracking-wide">
            MO-LEGEND
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-cyan-300"
          >
            Contact Me
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Student Developer · Graphic Designer · Web Designer
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Akintayo Mofeoluwa Richard
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-gray-300">
            I build digital experiences by combining software, design and
            creative problem-solving.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            I am a student developer and digital creator who learns by building
            practical projects. My interests include web applications,
            educational technology, artificial intelligence, graphic design
            and web design. I am continually developing my skills and turning
            ideas into working digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Explore My Work
            </a>
            <a
              href="mailto:rmofeoluwa@gmail.com"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:border-cyan-300"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-cyan-300/20 bg-white/[0.03] p-3 shadow-2xl shadow-cyan-950/20">
            <Image
              src="/profile.png"
              alt="Profile picture of Akintayo Mofeoluwa Richard"
              width={600}
              height={700}
              priority
              className="aspect-[6/7] w-full rounded-2xl object-cover"
            />
            <div className="px-3 py-5">
              <p className="text-lg font-semibold">MO-LEGEND</p>
              <p className="mt-1 text-sm text-gray-400">
                Software · Design · Innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          About My Work
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Different skills. One creative vision.
        </h2>
        <p className="mt-5 max-w-3xl leading-8 text-gray-400">
          From designing a visual identity to developing a website or exploring
          an AI-powered learning tool, I enjoy working across different areas
          of digital creation. My goal is to keep improving and build useful,
          accessible and well-designed products.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40"
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

      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Featured Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Ideas becoming reality
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-8">
            <p className="text-sm font-semibold text-cyan-300">
              EDUCATION TECHNOLOGY
            </p>
            <h3 className="mt-4 text-2xl font-bold">Modupath</h3>
            <p className="mt-4 leading-8 text-gray-300">
              An educational platform concept focused on helping students
              organise their learning, practise skills and explore possible
              future pathways.
            </p>
            <a
              href="https://modupath-modi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Visit Modupath ↗
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold text-cyan-300">
              AI LEARNING ASSISTANT
            </p>
            <h3 className="mt-4 text-2xl font-bold">Modi</h3>
            <p className="mt-4 leading-8 text-gray-300">
              An AI learning assistant within Modupath, designed to help
              students ask questions and work through learning topics.
            </p>
            <a
              href="/projects/modi"
              className="mt-6 inline-block font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Read the project case study →
            </a>
          </article>
        </div>

        <p className="mt-5 text-sm leading-6 text-gray-500">
          These are ongoing projects. Features and availability may change
          during development.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Technology
          </p>
          <h2 className="mt-3 text-3xl font-bold">Tools I work with</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            Technologies I have used or explored through my development
            projects.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Design Services
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Bringing brands and websites to life
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Through Riche Riche Digital Media Designer, I work on creative
            digital design, including:
          </p>

          <ul className="mt-6 grid gap-3 text-gray-300 sm:grid-cols-2">
            <li>• Logo and brand identity design</li>
            <li>• Flyer and promotional graphic design</li>
            <li>• Website design</li>
            <li>• Digital experiences and visual presentation</li>
          </ul>

          <p className="mt-5 text-sm leading-6 text-gray-500">
            For enquiries, please use the email address below.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-20"
      >
        <div className="rounded-3xl bg-cyan-300 p-8 text-slate-950 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em]">
            Get in Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Have an idea or project?
          </h2>
          <p className="mt-4 max-w-2xl leading-7">
            For website enquiries, graphic design projects or conversations
            about my work, contact me by email.
          </p>
          <a
            href="mailto:rmofeoluwa@gmail.com"
            className="mt-7 inline-block break-all rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            rmofeoluwa@gmail.com
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Akintayo Mofeoluwa Richard · MO-LEGEND</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/mofeoluwa155"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>
            <a
              href="mailto:rmofeoluwa@gmail.com"
              className="transition hover:text-cyan-300"
            >
              Email
            </a>
            <a href="/" className="transition hover:text-cyan-300">
              Portfolio Home
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
