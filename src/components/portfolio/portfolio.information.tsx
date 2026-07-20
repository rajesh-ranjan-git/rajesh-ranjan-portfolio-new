import Link from "next/link";
import { PortfolioDetailsProps } from "@/types/props/sections.props.types";

const PortfolioInformation = ({ project }: PortfolioDetailsProps) => {
  return (
    <div className="group right-4 bottom-0 absolute before:absolute before:inset-0 bg-surface-bg before:bg-[url('/assets/background/education-bg.webp')] before:bg-position-[-1rem] hover:bg-surface-bg-hover before:bg-no-repeat before:opacity-5 shadow-[0_12px_20px_var(--color-surface-shadow)] backdrop-blur-3xl p-6 border border-surface-border hover:border-surface-border-active rounded-2xl before:rounded-2xl hover:rounded-3xl max-w-108 before:bg-size-[200%] before:content-[''] transition-all duration-300 before:pointer-events-none">
      <h5 className="after:block lg:after:bottom-6 after:bottom-4 after:absolute relative after:bg-primary pb-8 after:rounded-lg after:w-20 after:h-1.5">
        Project Information
      </h5>

      {project?.category ? (
        <p>
          <span className="font-semibold">Category :</span> {project?.category}
        </p>
      ) : null}

      {project?.techStack && project?.techStack?.length > 0 ? (
        <div className="flex">
          <span className="pr-2 font-semibold shrink-0">Tech Stack :</span>
          <div className="flex flex-wrap items-center gap-2 w-full">
            {project.techStack.map((item) => (
              <div
                key={item}
                className="text-fixed-light bg-linear-to-br from-ink via-ink p-1 px-3 rounded-full w-max font-semibold text-xs bg-accent-blue to-accent-purple"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {project?.liveUrl ? (
        <p>
          <span className="font-semibold">Live URL :</span>&nbsp;
          <Link
            href={project?.liveUrl}
            target="_blank"
            className="transition-all duration-300 text-accent-blue hover:text-accent-pink"
          >
            Check out here
          </Link>
        </p>
      ) : null}

      {project?.githubUrl ? (
        <p>
          <span className="font-semibold">Github URL :</span>&nbsp;
          <Link
            href={project?.githubUrl}
            target="_blank"
            className="transition-all duration-300 text-accent-blue hover:text-accent-pink"
          >
            Check out here
          </Link>
        </p>
      ) : null}
    </div>
  );
};

export default PortfolioInformation;
