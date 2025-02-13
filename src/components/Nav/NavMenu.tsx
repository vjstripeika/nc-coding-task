"use client";
import NavLink from "@/components/Nav/NavLink";
import NavButton from "./NavButton";
import menuBarsSrc from "@/assets/menu-bars.svg";
import arrowRightSrc from "@/assets/arrow-right.svg";
import Image from "next/image";
import * as ROUTES from "@/constants/routes";
import { useToggle } from "@/hooks/useToggle";
import NavDrawer from "./NavDrawer";

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
