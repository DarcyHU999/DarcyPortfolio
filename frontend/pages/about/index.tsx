// frontend/components/About.tsx
import Layout from "@/components/layout";
import about from "@/public/resources/about_me.json";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { ReactNode } from "react";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
interface GrayBgProps {
  children: ReactNode;
}

interface AboutCard {
  AboutCardIcon: React.ComponentType<SvgIconProps>;
  title: string;
  description: string;
}

const abilities = [
  {
    AboutCardIcon: WebOutlinedIcon,
    title: "Frontend Development",
    description: "Build beautiful pages using modern frontend technologies.",
  },
  {
    AboutCardIcon: StorageOutlinedIcon,
    title: "Backend Development",
    description:
      "Construct a stable server-side using modern backend technologies.",
  },
  {
    AboutCardIcon: SportsEsportsOutlinedIcon,
    title: "Game Development",
    description: "Rapidly develop H5 games using an H5-based game engine.",
  },
];

const About = () => (
  <Layout title={"About Me"}>
    <div className="flex flex-col">
      <div className="py-5  mr-10">
        {about.about.map((s, index) => {
          return (
            <p key={`about-${index}`} className="text-xl my-4">
              {s}
            </p>
          );
        })}
      </div>
      <GrayBg>
        {abilities.map((item, index) => (
          <AboutCard
            AboutCardIcon={item.AboutCardIcon}
            title={item.title}
            description={item.description}
          />
        ))}
      </GrayBg>
    </div>
  </Layout>
);

const GrayBg: React.FC<GrayBgProps> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap py-5 px-10 bg-gray-100 h-auto w-auto mr-10 rounded-50">
      {children}
    </div>
  );
};

const AboutCard: React.FC<AboutCard> = ({
  AboutCardIcon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-50 w-3/4 flex flex-col mt-5 px-20 py-1">
      <section className="flex flex-row flex-wrap items-center">
        <AboutCardIcon className="text-blue-500 w-20 h-20" />
        <h2 className="text-3xl ml-2">{title}</h2>
      </section>
      <p className="text-lg px-3">{description}</p>
    </div>
  );
};

export default About;
