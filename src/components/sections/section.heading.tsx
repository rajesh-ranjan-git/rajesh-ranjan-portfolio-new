import { SectionProps } from "@/types/props/sections.props.types";

const SectionHeading = ({ title }: Partial<SectionProps>) => {
  return (
    <>
      {title ? (
        <h2 className="after:block lg:after:bottom-12 after:bottom-6 after:absolute relative after:bg-primary pb-8 lg:pb-12 after:rounded-lg after:w-20 after:h-1.5 font-arima">
          {title}
        </h2>
      ) : null}
    </>
  );
};

export default SectionHeading;
