import { SectionProps } from "@/types/props/sections.props.types";

const SectionDescription = ({ description }: Partial<SectionProps>) => {
  return <>{description ? <h6 className="">{description}</h6> : null}</>;
};

export default SectionDescription;
