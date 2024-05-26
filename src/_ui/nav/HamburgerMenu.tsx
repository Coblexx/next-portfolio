// react-icons
import { FiMenu } from "react-icons/fi";

// context
import { useNavContext } from "@/_ui/nav/NavContext";

export default function HamburgerMenu() {
  const { handleToggle } = useNavContext();

  return (
    <button
      className="absolute right-0 p-8 md:hidden"
      onClick={() => handleToggle()}
    >
      <FiMenu size={30} />
    </button>
  );
}
