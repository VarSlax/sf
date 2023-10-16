const Title = ({ title, className }: { title: string; className?: string }) => (
  <div
    className={`${className} m-5 mt-12 text-center text-2xl font-semibold uppercase text-golden lg:text-4xl`}
  >
    {title}
  </div>
);

export default Title;
