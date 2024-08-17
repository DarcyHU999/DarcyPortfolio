interface SkillProps {
  skill: string;
}

interface SkillCardProps {
  skills: { [key: string]: string[] };
}

const SkillComponent: React.FC<SkillProps> = ({ skill }) => {
  return (
    <>
      <div className="mr-2  px-2 text-sm rounded-10 h-5 w-28 bg-blue-600 text-center text-white my-2">
        {skill}
      </div>
    </>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <>
      <section className="-ml-10 py-10 px-10 bg-gray-100 rounded-b-10">
        <h2 className="text-3xl mb-5 ml-8 font-bold ">Skills</h2>
        <div className=" py-10 px-10 flex flex-col rounded-50 h-auto w-full bg-white shadow">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              className="flex flex-row flex-wrap my-1"
              key={`skill-${category}`}
            >
              <h3 className="font-bold text-lg w-full">{category}</h3>
              <div className="flex flex-wrap">
                {skillList.map((skill, index) => (
                  <SkillComponent key={`skill-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default SkillCard;
