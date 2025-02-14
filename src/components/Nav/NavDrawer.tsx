import { Fragment } from "react";
import { createPortal } from "react-dom";

import NavButton from "./NavButton";
import Typography from "@/components/Typography";


type NavDrawerProps = { toggleOpen: () => void };

const NavDrawer: React.FC<NavDrawerProps> = ({ toggleOpen }) => {
  return createPortal(
    <Fragment>
      <div
        className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-20"
        onClick={toggleOpen}
      />
      <div className="fixed top-0 bottom-0 right-0 w-96 bg-white shadow-sm">
        <div className="flex justify-between h-36 items-center px-6 border-b border-gray-300">
          <Typography className="font-semibold">Navigation Menu</Typography>
          <NavButton onClick={toggleOpen}>Close</NavButton>
        </div>
      </div>
    </Fragment>,
    document.body
  );
};

export default NavDrawer;
