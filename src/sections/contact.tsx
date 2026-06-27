import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";

const Contact = ({ title }: SectionProps) => {
  return (
    <section id="contact">
      {title ? <SectionHeading heading={title} /> : null}

      <div className="items-center gap-12 md:gap-24 grid grid-cols-1 lg:grid-cols-[minmax(18rem,20rem)_minmax(0,1fr)] w-full">
        Contact section contents coming soon...
      </div>
    </section>
  );
};

export default Contact;
