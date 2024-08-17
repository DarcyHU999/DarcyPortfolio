import exp from "constants";

interface SkillProps {
  skill: string;
}

interface SkillCardProps {
  skills: { [key: string]: string[] };
}

const SkillComponent: React.FC<SkillProps> = ({ skill }) => {
  return (
    <>
      <div className="mr-4 my-2 px-2 text-sm rounded-10 h-5 w-28 bg-blue-600 text-center text-white">
        {skill}
      </div>
    </>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <>
    <section className="-ml-10 py-5 px-10 bg-gray-100 rounded-b-10">
      <h2 className="text-3xl ml-8 mb-5">Skills</h2>
      <div className=" py-10 px-10 flex flex-col rounded-50 h-auto w-full bg-white shadow">
      {Object.entries(skills).map(([category, skillList]) => (
        <div className="flex flex-row my-3 flex-wrap" key={`skill-${category}`}>
          <h3 className="font-bold w-full text-lg">{category}</h3>
          
            {skillList.map((skill, index) => (
              <SkillComponent key={`skill-${index}`} skill={skill}/>
            ))}
          
        </div>
      ))}
      </div>
      </section>
    </>
  );
};
export default SkillCard;
