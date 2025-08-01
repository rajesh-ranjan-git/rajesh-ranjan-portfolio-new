const AboutText = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-6 lg:p-10 py-2 pr-4 h-full text-justify">
      <h2 className="after:-bottom-2 after:left-0 after:absolute relative after:bg-[#12192c] mb-4 after:rounded-md after:w-10 after:h-1.5 font-bold text-[#12192c] text-2xl md:text-3xl lg:text-5xl text-nowrap">
        About
      </h2>

      <p className="text-sm md:text-lg">
        I’m a passionate and results-driven Full Stack Developer with over 6
        years of professional experience, currently working at Business Today
        Technology, part of the India Today Group. I specialize in building
        scalable and high-performance web applications using modern
        technologies.
        <br />
        <br />
        My expertise lies in the MERN stack (MongoDB, Express.js, React.js,
        Node.js), along with Next.js, TypeScript, and JavaScript for frontend
        and backend development. I also have strong experience with SQL,
        PostgreSQL, Prisma ORM, and MongoDB, giving me a versatile edge in both
        relational and non-relational databases.
        <br />
        <br />
        In addition to my core stack, I’ve worked with Java and Python, enabling
        me to adapt to diverse project requirements and technical challenges.
        <br />
        <br />
        I’m always looking for opportunities to collaborate on innovative
        projects and contribute to tech communities.
      </p>
    </div>
  );
};

export default AboutText;
