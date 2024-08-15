import ExpCard from "@/components/expCard";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import edu from "@/public/resources/education_experience.json";
import work from "@/public/resources/work_experience.json";
import Layout from "@/components/layout";
const Resume = () => {
  return (
    <Layout title={"Resume"}>
      <section className="flex xl:flex-row flex-col">
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
    </Layout>
  );
};

export default Resume;
