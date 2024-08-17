import ExpCard from "@/components/expCard";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import edu from "@/public/resources/education_experience.json";
import work from "@/public/resources/work_experience.json";
import Layout from "@/components/layout";
import skills from "@/public/resources/skills.json"
import SkillCard from "@/components/skillBoard";
const Qualifications = () => {
  return (
    <Layout title={"Qualifications"}>
      <section className="flex xl:flex-row flex-col pb-10">
        <ExpCard
          ExpCardIcon={SchoolOutlinedIcon}
          title={"Education"}
          expContents={edu.exp}
        />
        <ExpCard
          ExpCardIcon={WorkOutlineOutlinedIcon}
          title={"Experience"}
          expContents={work.exp}
        />
      </section>
      <section>
        <SkillCard skills={skills.skills}/>
      </section>
    </Layout>
  );
};

export default Qualifications;
