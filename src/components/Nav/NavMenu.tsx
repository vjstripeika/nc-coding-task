"use client";
import Image from "next/image";

import NavButton from "./NavButton";
import NavDrawer from "./NavDrawer";
import NavLink from "./NavLink";
import arrowRightSrc from "@/assets/arrow-right.svg";
import menuBarsSrc from "@/assets/menu-bars.svg";
import * as ROUTES from "@/constants/routes";
import { useToggle } from "@/hooks/useToggle";


const NavMenu: React.FC = () => {
  const { isOpen, toggleOpen } = useToggle();
  return (
    <div className="flex gap-3">
      <NavLink href={ROUTES.CONTACT}>
        {"Let's Talk "}
        <Image
          src={arrowRightSrc}
          alt="Navigation Menu"
          height={12}
          className="inline"
        />
      </NavLink>
      <NavButton onClick={toggleOpen} className="items-center">
        <Image src={menuBarsSrc} alt="menu" height={10} />
      </NavButton>
      {isOpen && <NavDrawer toggleOpen={toggleOpen} />}
    </div>
  );
};

export default NavMenu;
