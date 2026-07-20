import { PortfolioDetailsProps } from "@/types/props/sections.props.types";

const PortfolioDetailedInformation = ({ project }: PortfolioDetailsProps) => {
  return (
    <div className="flex flex-col gap-8 pt-16">
      {project?.title ? (
        <h3 className="after:block lg:after:bottom-4 after:bottom-2 after:absolute relative after:bg-primary pb-4 after:rounded-lg after:w-20 after:h-1 font-alkatra">
          {project?.title}
        </h3>
      ) : null}

      {project?.description ? (
        <p className="text-lg">{project?.description}</p>
      ) : null}

      {project?.techStack && project?.techStack?.length > 0 ? (
        <div className="flex flex-col gap-2">
          <h5>Tech Stack</h5>

          <div className="flex flex-col gap-2">
            {project.techStack.map((stack) => (
              <div
                key={stack.type}
                className="flex flex-wrap items-center gap-2 w-full"
              >
                <span className="pr-1 md:min-w-72 font-semibold shrink-0">
                  {stack.type} :
                </span>
                {stack.tech.map((item) => (
                  <div
                    key={item}
                    className="text-fixed-light bg-linear-to-br from-ink via-ink p-1 px-3 border border-alternate-bg rounded-full w-max text-xs bg-accent-blue to-accent-purple"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {project?.features && project?.features?.length > 0 ? (
        <div className="flex flex-col gap-2">
          <h5>Features</h5>

          <div className="flex flex-col gap-3 sm:gap-2">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="flex sm:flex-row flex-col sm:items-start gap-1 sm:gap-2 w-full"
              >
                <span className="md:min-w-72 font-semibold shrink-0">
                  {feature.title} :
                </span>
                <span className="min-w-0">{feature.description}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioDetailedInformation;
