import { ReactNode, createContext, useState, useContext } from "react";

type NavContextType = {
  isOpen: boolean;
  handleToggle: Function;
  handleClose: Function;
};

const NavContext = createContext<NavContextType | null>(null);

export default function NavContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <NavContext.Provider value={{ isOpen, handleToggle, handleClose }}>
      {children}
    </NavContext.Provider>
  );
}

function useNavContext() {
  const context = useContext(NavContext);

  if (!context) throw new Error("Element must be wrapped in Nav Context!");

  return context;
}

export { NavContextProvider, useNavContext };
