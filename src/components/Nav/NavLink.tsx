import cn from "classnames";
import Link from "next/link";
import type { PropsWithChildren } from "react";

import { WithClassName } from "@/utils/types";

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
      tabIndex={0}
    >
      {children}
    </Link>
  );
};

export default NavLink;
