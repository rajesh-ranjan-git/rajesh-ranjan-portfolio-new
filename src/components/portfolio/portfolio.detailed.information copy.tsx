import { PortfolioDetailsProps } from "@/types/props/sections.props.types";

const PortfolioDetailedInformation = ({ project }: PortfolioDetailsProps) => {
  return (
    <div className="flex flex-col gap-4 pt-40">
      {project?.title ? (
        <h3 className="after:block lg:after:bottom-4 after:bottom-2 after:absolute relative after:bg-primary pb-4 after:rounded-lg after:w-20 after:h-1 font-alkatra">
          {project?.title}
        </h3>
      ) : null}

      {project?.description ? <p>{project?.description}</p> : null}

      {project?.techStack && project?.techStack?.length > 0 ? (
        <div>
          <h5>Tech Stack</h5>

          <table className="w-full table-fixed">
            <tbody>
              {project?.techStack?.map((stack) => (
                <tr key={stack.type}>
                  <th
                    scope="row"
                    className="py-2 pr-6 w-64 font-semibold text-left align-top"
                  >
                    {stack.type}
                  </th>

                  <td className="flex gap-2 py-2 wrap-break-word align-top">
                    {stack.tech.map((item) => (
                      <div
                        key={item}
                        className="text-fixed-light bg-linear-to-br from-ink via-ink p-1 px-3 border border-alternate-bg rounded-full w-max font-semibold text-xs bg-accent-blue to-accent-purple"
                      >
                        {item}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {project?.features && project?.features?.length > 0 ? (
        <>
          <h6>Features</h6>

          <table className="w-full table-fixed">
            <tbody>
              {project?.features?.map((feature) => (
                <tr key={feature.title}>
                  <th
                    scope="row"
                    className="py-2 pr-6 w-64 font-semibold text-left align-top"
                  >
                    {feature.title}
                  </th>

                  <td className="py-2 wrap-break-word align-top">
                    {feature.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
};

export default PortfolioDetailedInformation;
