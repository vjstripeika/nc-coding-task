import { WithClassName } from "@/utils/types";
import { PropsWithChildren } from "react";
import cn from "classnames";
import Link from "next/link";

type NavLinkProps = PropsWithChildren<
  {
    href: string;
  } & WithClassName
>;

const NavLink: React.FC<NavLinkProps> = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={cn(
        "py-3 px-5 border border-black rounded-3xl uppercase text-xs font-semibold flex gap-2 hover:bg-gray-100 transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
