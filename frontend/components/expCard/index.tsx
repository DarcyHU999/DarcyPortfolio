import { SvgIconProps } from "@mui/material/SvgIcon";
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
    <section className="flex flex-col w-full mt-10">
      <div className="flex flex-row">
        <ExpCardIcon className="text-blue-700 w-10 h-10 mt-1" />
        <h2 className="ml-2 text-3xl ">{title}</h2>
      </div>
      <ul className="relative z-5">
        {expContents.map((i, index) => (
          <li key={`education-${index}`} className={`relative pl-10 mb-0}`}>
            <div
              className={`absolute left-4 right-0 bottom-0 w-px bg-gray-300  h-full ${
                index === 0 ? "top-7" : "top-0"
              }`}
            ></div>
            <div className="absolute w-4 h-4 bg-blue-100 rounded-full left-2 top-7"></div>
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full left-3 top-8"></div>
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
