import { SvgIconProps } from "@mui/material/SvgIcon";

interface ExpCardProps {
  ExpCardIcon: React.ComponentType<SvgIconProps>;
  title: string;
}
const ExpCard: React.FC<ExpCardProps> = ({ ExpCardIcon, title }) => (
  <>
    <div className="flex">
      <ExpCardIcon className="w-70 h-70" />
      <h2 className="ml-10">{title}</h2>
    </div>
  </>
);

export default ExpCard;
