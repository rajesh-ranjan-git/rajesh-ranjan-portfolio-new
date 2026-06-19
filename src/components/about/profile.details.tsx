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
    <section className="w-full">
      <h2 className="font-bold text-3xl">{title}</h2>

      <p className="mt-3 text-gray-600 text-base">{description}</p>

      <table className="mt-8 w-full table-fixed">
        <colgroup>
          <col className="w-32 md:w-48 lg:w-56" />
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

              <td className="py-2 text-gray-700 align-top">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProfileDetails;
