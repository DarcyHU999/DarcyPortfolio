import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";

interface MenuHorizonProps {
  isMenuOpen: boolean;
  toggleExpand: () => void;
}

const MenuHorizon: React.FC<MenuHorizonProps> = ({
  isMenuOpen,
  toggleExpand,
}) => (
  <>
    <button
      className="w-10 h-10  bg-gradient-to-r from-blue-600 to-blue-700 rounded-l-50 rounded-br-50 rounded-tr-10 text-gray-200 hover:text-white"
      onClick={toggleExpand}
    >
      {isMenuOpen ? <ClearTwoToneIcon /> : <MenuTwoToneIcon />}
    </button>
  </>
);

export default MenuHorizon;
