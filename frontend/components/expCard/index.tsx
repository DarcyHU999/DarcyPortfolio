import { SvgIconProps } from "@mui/material/SvgIcon";
import { ReactNode } from "react";
import ExpContent, { ExpContentProps } from "../expContent";

interface ExpCardProps {
  ExpCardIcon: React.ComponentType<SvgIconProps>;
  title: string;
  expContents: ExpContentProps[];
}
const ExpCard: React.FC<ExpCardProps> = ({
  ExpCardIcon,
  title,
  expContents,
}) => (
  <>
    <section className="flex flex-col w-full">
      <div className="flex flex-row">
        <ExpCardIcon className="text-blue-700 w-[40px] h-[40px] mt-1" />
        <h2 className="ml-2 text-[30px] ">{title}</h2>
      </div>
      <ul className="relative ">
        {expContents.map((i, index) => (
          <li key={`education-${i}`} className={`relative pl-10 mb-0}`}>
            <div
              className={`after:absolute after:left-[15px] after:right-0 after:bottom-0 after:top-0 after:w-[1px] after:bg-gray-300 ${
                index === expContents.length - 1 ? "after:bottom-[150px]" : ""
              }
                ${index === 0 ? "after:top-[30px]" : ""}`}
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
    </section>
  </>
);

export default ExpCard;
