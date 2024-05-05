// clsx
import clsx from "clsx";

// components
import NavItem from "./NavItem";

//data
import routes from "../../routes.json";

export default function NavLinks({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: Function;
}) {
  return (
    <ul
      className={clsx(
        "h-full gap-5 md:flex",
        !isOpen && "hidden",
        isOpen && "flex w-full flex-col gap-6 py-6",
      )}
    >
      {Object.entries(routes).map(([route, title]) => (
        <NavItem
          handleClick={() => isOpen && handleClick()}
          key={route}
          href={route}
          isOpen={isOpen}
        >
          {title}
        </NavItem>
      ))}
    </ul>
  );
}
