import Link from "next/link";

import NavMenu from "./NavMenu";
import Logo from "@/components/Logo";
import * as ROUTES from "@/constants/routes";


const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-36">
      <Link href={ROUTES.HOME} className="py-3 pr-3">
        <Logo />
      </Link>
      <NavMenu />
    </nav>
  );
};

export default NavBar;
