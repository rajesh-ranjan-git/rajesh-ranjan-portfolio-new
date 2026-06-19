type DetailRow = {
  label: string;
  value: string;
};

interface ProfileDetailsProps {
  title: string;
  description: string;
  details: DetailRow[];
}

const ProfileDetails = ({
  title,
  description,
  details,
}: ProfileDetailsProps) => {
  return (
    <section className="w-full min-w-0">
      <h2 className="text-shadow-[2px_2px_black] font-bold text-[#699ee1] text-2xl sm:text-3xl text-balance">
        {title}
      </h2>

      <p className="mt-3 text-base text-pretty">{description}</p>

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

export default ProfileDetails;
