import { stackGroups } from "@/data";
import { TechBadge } from "./ui/TechBadge";

const StackGroups = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="heading">
          A stack connected to <span className="text-blue">real work</span>
        </h2>
        <p className="mt-5 text-lg leading-8 text-white-100">
          I choose tools for the product constraint in front of me, not to fill a
          list. These are the systems I have used across shipped applications.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {stackGroups.map((group) => (
          <article
            key={group.label}
            className="rounded-3xl border border-white/10 bg-[#0b1028]/70 p-6 transition hover:border-cyan-300/40"
          >
            <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
              {group.label}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <TechBadge key={tool}>
                  {tool}
                </TechBadge>
              ))}
            </div>
            <p className="mt-5 text-lg leading-8 text-white-100">
              {group.proof}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StackGroups;
