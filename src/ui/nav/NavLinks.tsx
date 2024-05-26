// clsx
import clsx from "clsx";

// components
import NavItem from "./NavItem";

//data
import routes from "../../routes.json";

// context
import { useNavContext } from "@/_ui/nav/NavContext";

export default function NavLinks() {
  const { isOpen } = useNavContext();

  return (
    <ul
      className={clsx(
        "h-full gap-5 md:flex",
        !isOpen && "hidden",
        isOpen && "flex w-full flex-col gap-6 py-6",
      )}
    >
      {Object.entries(routes).map(([route, title]) => (
        <NavItem key={route} href={route}>
          {title}
        </NavItem>
      ))}
    </ul>
  );
}
