const SectionHeader = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <section className="text-center">
      <h2 className="text-white font-semibold mb-2.5 font-jakarta text-[25px]">
        {title}
      </h2>
      <p className="text-sm text-slate max-w-[500px] mx-auto">{content}</p>
    </section>
  );
};

export default SectionHeader;
