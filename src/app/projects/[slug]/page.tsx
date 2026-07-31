import { projectDetails } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCheck, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default function ProjectCaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectDetails[params.slug as keyof typeof projectDetails];

  if (!project) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden bg-black-100 px-5 py-24 sm:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[min(90vw,900px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal direction="left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-lg text-white-100 transition hover:text-cyan-300"
          >
            <FaArrowLeft /> Back to projects
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal direction="left">
            <p className="text-base uppercase tracking-[0.25em] text-cyan-300">
              {project.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white-100 md:text-xl">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-lg font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View live product <FaExternalLinkAlt className="text-base" />
              </a>
              {"repositories" in project ? (
                project.repositories.map((repository) => (
                  <a
                    key={repository.label}
                    href={repository.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-lg font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                  >
                    {repository.label} <FaGithub />
                  </a>
                ))
              ) : null}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-[#0b1028]/80 p-6 shadow-[0_20px_80px_rgba(6,182,212,0.08)]">
              <p className="text-base uppercase tracking-[0.2em] text-white-100">
                My role
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {project.role}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tool) => (
                  <TechBadge key={tool}>
                    {tool}
                  </TechBadge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <section className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
                The problem
              </p>
              <p className="mt-4 text-lg leading-8 text-white-100">
                {project.problem}
              </p>
            </section>
          </Reveal>
          <Reveal direction="right" delay={0.06}>
            <section className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
                What I delivered
              </p>
              <p className="mt-4 text-lg leading-8 text-white-100">
                {project.contribution}
              </p>
            </section>
          </Reveal>
        </div>

        <Reveal>
          <section className="mt-6 rounded-3xl border border-white/10 bg-[#0b1028]/80 p-6 md:p-8">
            <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
              Key decisions
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {project.decisions.map((decision, index) => (
                <Reveal key={decision} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-white/10 bg-black/20 p-5">
                    <FaCheck className="text-cyan-300" />
                    <p className="mt-4 text-lg leading-8 text-white-100">
                      {decision}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <section className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
                Product workflows
              </p>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-lg leading-8 text-white-100"
                  >
                    <FaCheck className="mt-1 shrink-0 text-cyan-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
          <Reveal direction="right" delay={0.06}>
            <section className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
                How to verify it
              </p>
              <ul className="mt-6 space-y-4">
                {project.verification.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-lg leading-8 text-white-100"
                  >
                    <FaCheck className="mt-1 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
