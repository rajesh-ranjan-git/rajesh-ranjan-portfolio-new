import { SectionHeadingProps } from "@/types/props/common.props.types";

const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <>
      {heading ? (
        <h1 className="after:block lg:after:bottom-12 after:bottom-8 after:absolute relative after:bg-primary pb-8 lg:pb-12 after:rounded-lg after:w-20 after:h-1.5 font-arima">
          {heading}
        </h1>
      ) : null}
    </>
  );
};

export default SectionHeading;
