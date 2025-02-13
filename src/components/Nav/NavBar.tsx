import Logo from "@/components/Logo";
import Link from "next/link";
import * as ROUTES from "@/constants/routes";
import NavMenu from "./NavMenu";

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
