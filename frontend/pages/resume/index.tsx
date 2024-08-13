import ExpCard from "@/components/expCard";
import ExpContent from "@/components/expContent";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const initContent = [
  {
    position: "Master of Information Technology",
    duration: "2021-2023",
    institution: "University of New South Wales",
    address: "Sydney, Australia",
    description: "WAM: Distinction",
  },
  {
    position: "Bacholer of Engineer",
    duration: "2016-2020",
    institution: "Chongqing University of Technology",
    address: "Chongqing, China",
    description: "WAM: High Distinction",
  },
];

const Resume = () => {
  return (
    <>
      <ExpCard ExpCardIcon={SchoolOutlinedIcon} title={"Education"}>
        <ul className="relative ">
          {initContent.map((i, index) => (
            <li key={`education-${i}`} className={`relative pl-10 mb-0}`}>
              <div
                className={`before:absolute before:left-[15px] before:right-0 before:bottom-0 before:top-0 before:w-[1px] before:bg-gray-300 ${
                  index === initContent.length - 1
                    ? "before:bottom-[100px]"
                    : ""
                }
                ${index === 0 ? "before:top-[30px]" : ""}`}
              ></div>
              <div className="absolute w-4 h-4 bg-blue-100 rounded-full left-2 top-[26px]"></div>
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full left-[12px] top-[30px]"></div>
              <ExpContent
                key={`exp-education-${i}`}
                position={i.position}
                duration={i.duration}
                institution={i.institution}
                address={i.address}
                description={i.description}
              />
            </li>
          ))}
        </ul>
      </ExpCard>
    </>
  );
};

export default Resume;
