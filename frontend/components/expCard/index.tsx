import { SvgIconProps } from "@mui/material/SvgIcon";
import { ReactNode } from "react";

interface ExpCardProps {
  ExpCardIcon: React.ComponentType<SvgIconProps>;
  title: string;
  children: ReactNode;
}
const ExpCard: React.FC<ExpCardProps> = ({ children, ExpCardIcon, title }) => (
  <>
    <section className="flex flex-col">
      <div className="flex flex-row">
        <ExpCardIcon className="text-blue-700 w-[40px] h-[40px] mt-1" />
        <h2 className="ml-2 text-[30px] ">{title}</h2>
      </div>
      {children}
    </section>
  </>
);

export default ExpCard;
