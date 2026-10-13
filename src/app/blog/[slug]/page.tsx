export const instant = false;

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Comments from "../components/Comments";
import ReadingProgress from "../components/ReadingProgress";

type Article = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

const articles: Record<string, Article> = {
  "building-modupath": {
    title: "How I'm Building Modupath, My Educational Platform",
    description:
      "My experience building Modupath, an educational platform designed to help students explore learning and future careers.",
    date: "12 October 2026",
    readTime: "5 min read",
    category: "Projects",
    intro:
      "Building Modupath has given me the opportunity to turn an idea into a real software project. I wanted to explore how technology could make learning more organised, accessible and useful for students.",
    sections: [
      {
        heading: "Where the idea began",
        paragraphs: [
          "I started thinking about how students learn, how they discover their strengths and how they make decisions about their future. Finding useful information can be difficult when it is spread across different websites and resources.",
          "That inspired me to work on Modupath, a platform focused on learning, exploration and helping students think about their next steps.",
        ],
      },
      {
        heading: "Turning an idea into a product",
        paragraphs: [
          "Creating a website involves more than designing a homepage. The project needs navigation, clear pages, reliable data handling and a consistent experience across different devices.",
          "As I develop Modupath, I have to think about how each feature fits into the wider platform. I also need to test changes instead of assuming that something works simply because the code looks correct.",
        ],
      },
      {
        heading: "What I am learning",
        paragraphs: [
          "Working on a real project helps me connect programming concepts to practical problems. I am learning about application structure, deployment, debugging and the importance of keeping user experience in mind.",
          "I have also learned that an ambitious idea usually needs to be divided into smaller tasks. Solving one problem at a time makes the work easier to understand and maintain.",
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "My goal is to keep improving Modupath through testing, useful feedback and careful development. I want the platform to solve real problems for students rather than adding features just to make it look bigger.",
          "This project is an ongoing learning experience. I expect to discover more problems, make improvements and document what I learn along the way.",
        ],
      },
    ],
  },

  "building-modi": {
    title: "Building Modi: Lessons From Creating an AI Learning Assistant",
    description:
      "What I am learning while developing Modi, the AI learning assistant inside my Modupath platform.",
    date: "12 October 2026",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    intro:
      "Modi is the AI learning assistant I am developing as part of Modupath. The idea is to help students get guidance while keeping the wider learning platform useful even beyond its AI features.",
    sections: [
      {
        heading: "Why I am building Modi",
        paragraphs: [
          "Students often need explanations, help understanding a topic or guidance on what to study next. I wanted to explore how an AI assistant could support those activities inside a learning platform.",
          "Modi is intended to be one part of the wider Modupath experience, rather than the entire product.",
        ],
      },
      {
        heading: "Connecting the different parts",
        paragraphs: [
          "Building an AI assistant requires more than sending a question to a model. The application also needs a user interface, server-side request handling, error management and a way to present answers clearly.",
          "The surrounding application matters because users need the experience to be understandable and reliable, even when a request fails or takes longer than expected.",
        ],
      },
      {
        heading: "The challenge of response speed",
        paragraphs: [
          "One issue I have been investigating is response time. An AI assistant can provide useful information, but a long wait makes the experience frustrating.",
          "The right way to improve performance is to measure the request, identify where time is being spent and test changes against real results. Guessing at the cause can lead to changes that do not solve the problem.",
        ],
      },
      {
        heading: "Accuracy and responsibility",
        paragraphs: [
          "AI-generated answers can be incorrect or incomplete. A learning assistant therefore needs to encourage students to think critically and check important information instead of treating every response as automatically correct.",
          "I also need to consider privacy, secure configuration and how errors are communicated to users.",
        ],
      },
      {
        heading: "What this project is teaching me",
        paragraphs: [
          "Developing Modi is helping me understand the work involved in connecting AI services to a real application. It has also shown me that testing, performance and user experience matter just as much as getting a feature to run.",
          "I plan to keep improving the assistant as I learn more about software engineering and receive feedback on the platform.",
        ],
      },
    ],
  },

  "developer-challenges": {
    title: "The Challenges I'm Learning to Solve as a Young Developer",
    description:
      "Lessons from learning software development, building projects and solving technical problems.",
    date: "12 October 2026",
    readTime: "5 min read",
    category: "Developer Journey",
    intro:
      "Learning software development is not just about writing code. It also involves solving problems, understanding errors, testing ideas and learning how different parts of a system work together.",
    sections: [
      {
        heading: "Understanding errors",
        paragraphs: [
          "An error can be confusing when the message points to a place in the code without explaining the underlying cause. I am learning to read error messages carefully and investigate the relevant files before changing anything.",
          "Breaking a problem into smaller steps helps me understand what is failing and whether a change actually fixes it.",
        ],
      },
      {
        heading: "Building real projects",
        paragraphs: [
          "Personal projects give me a way to practise what I learn. They also introduce problems that small exercises may not cover, including configuration, deployment, data handling and interactions between different components.",
          "A feature that works on my computer still needs to be tested in the environment where people will use it.",
        ],
      },
      {
        heading: "Learning from mistakes",
        paragraphs: [
          "Sometimes a change fixes one issue but creates another. This is why I am learning to keep track of changes, run tests and avoid modifying unrelated parts of a project unnecessarily.",
          "Mistakes are useful when I take the time to understand what caused them and how to prevent the same problem in the future.",
        ],
      },
      {
        heading: "Using AI as a development tool",
        paragraphs: [
          "AI tools can help explain unfamiliar concepts, suggest possible fixes and speed up parts of development. However, suggestions still need to be checked and tested.",
          "I want to understand the code I use, not simply copy solutions without knowing what they do. Building that understanding is important for becoming a more independent developer.",
        ],
      },
      {
        heading: "My next steps",
        paragraphs: [
          "I plan to keep building projects, improving my programming skills and documenting what I learn. Each project gives me another opportunity to practise problem-solving and produce something useful.",
          "Progress comes from consistent learning, testing ideas and being willing to investigate problems rather than giving up when something does not work immediately.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: `${article.title} | Software Portfolio`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  if (!Object.hasOwn(articles, slug)) {
    notFound();
  }

  const article = articles[slug];
  const relatedArticles = Object.entries(articles).filter(
    ([otherSlug]) => otherSlug !== slug,
  );

  return (
    <main className="min-h-screen bg-[#080a0f] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080a0f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <Link
            href="/"
            className="font-semibold tracking-tight text-white"
          >
            Software Portfolio<span className="text-cyan-300">.</span>
          </Link>

          <Link
            href="/blog"
            className="text-sm text-white/65 transition hover:text-cyan-300"
          >
            All articles
          </Link>
        </div>
        <ReadingProgress />
      </header>

      <article className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:pt-16">
        <Link
          href="/blog"
          className="text-sm text-cyan-300 transition hover:text-cyan-200"
        >
          â† Back to the blog
        </Link>

        <div className="mt-8">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
            {article.category}
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {article.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-white/65">
            {article.intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/10 pb-7 text-sm text-white/45">
            <span>By the developer</span>
            <span aria-hidden="true">â€¢</span>
            <time>{article.date}</time>
            <span aria-hidden="true">â€¢</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
            In this article
          </h2>
          <ul className="mt-4 space-y-3">
            {article.sections.map((section, index) => (
              <li key={section.heading}>
                <a
                  href={`#section-${index}`}
                  className="text-sm text-white/65 transition hover:text-cyan-300"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-12">
          {article.sections.map((section, index) => (
            <section
              key={section.heading}
              id={`section-${index}`}
              className="scroll-mt-28"
            >
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {section.heading}
              </h2>

              <div className="mt-5 space-y-5 text-base leading-8 text-white/70">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-6">
          <h2 className="text-xl font-semibold">Enjoyed this article?</h2>
          <p className="mt-2 leading-7 text-white/65">
            Share your thoughts, ask a question or explore another article
            about software development and my projects.
          </p>
          <Link
            href="/blog"
            className="mt-5 inline-flex rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Explore more articles
          </Link>
        </div>

        <section className="mt-14 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-semibold">More to explore</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {relatedArticles.map(([relatedSlug, relatedArticle]) => (
              <Link
                key={relatedSlug}
                href={`/blog/${relatedSlug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/40"
              >
                <span className="text-xs text-cyan-300">
                  {relatedArticle.category}
                </span>
                <h3 className="mt-3 font-semibold leading-6 text-white transition group-hover:text-cyan-200">
                  {relatedArticle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {relatedArticle.description}
                </p>
                <span className="mt-4 inline-block text-sm text-cyan-300">
                  Read article â†’
                </span>
              </Link>
            ))}
          </div>
        </section>

        <Comments slug={slug} />
      </article>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/40">
        Software Portfolio Â· Built while learning and creating
      </footer>
    </main>
  );
}
