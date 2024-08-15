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
      className="w-16 h-16  bg-gradient-to-r from-blue-600 to-blue-700 rounded-50 xl:rounded-l-50 xl:rounded-br-50 xl:rounded-tr-10 text-gray-200 hover:text-white"
      onClick={toggleExpand}
    >
      {isMenuOpen ? (
        <ClearTwoToneIcon fontSize="large" />
      ) : (
        <MenuTwoToneIcon fontSize="large" />
      )}
    </button>
  </>
);

export default MenuHorizon;
