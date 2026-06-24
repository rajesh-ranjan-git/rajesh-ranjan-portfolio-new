import { AboutTextProps } from "@/types/props/common.props.types";

const AboutText = ({ title, description, details }: AboutTextProps) => {
  return (
    <section className="w-full min-w-0">
      <h2 className="text-shadow-[2px_2px_black] font-arima font-bold text-accent-blue text-balance">
        {title}
      </h2>

      <p className="mt-3 text-pretty">{description}</p>

      <table className="mt-8 w-full table-fixed">
        <colgroup>
          <col className="w-28 sm:w-32 md:w-36 lg:w-44 xl:w-48" />
          <col />
        </colgroup>
        <tbody>
          {details.map((item) => (
            <tr key={item.label}>
              <th
                scope="row"
                className="py-2 pr-6 w-48 font-semibold text-left align-top"
              >
                {item.label}
              </th>

              <td className="py-2 wrap-break-word align-top">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AboutText;
