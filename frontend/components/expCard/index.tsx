import { SvgIconProps } from '@mui/material/SvgIcon';

interface ExpCardProps {
    ExpCardIcon: React.ComponentType<SvgIconProps>;
    title:string
  }
const ExpCard: React.FC<ExpCardProps> = ({
  ExpCardIcon,title
}) => (
  <>
    <div className='flex '>
        <ExpCardIcon />
        <h2>{title}</h2>
    </div>
  </>
);

export default ExpCard;
