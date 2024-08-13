import ExpCard from "@/components/expCard";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import edu from "@/public/resources/education_experience.json";
import work from "@/public/resources/work_experience.json";
const Resume = () => {
  return (
    <>
      <section className="flex flex-row">
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
    </>
  );
};

export default Resume;
