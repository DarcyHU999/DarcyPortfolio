export interface ExpContentProps {
  duration: string;
  position: string;
  institution: string;
  address: string;
  description: string;
}

const ExpContent: React.FC<ExpContentProps> = ({
  duration,
  position,
  institution,
  description,
  address,
}) => {
  return (
    <>
      <section className="flex flex-col w-full pt-5 pr-10">
        <h1 className="font-bold text-xl">{position}</h1>
        <div className="flex justify-between">
          <h2 className="font-bold italic">{institution}</h2>
          <h2 className="italic">{address}</h2>
        </div>
        <h3 className="italic text-gray-500 py-2 ">{duration}</h3>
        <h3>{description}</h3>
      </section>
    </>
  );
};
export default ExpContent;
