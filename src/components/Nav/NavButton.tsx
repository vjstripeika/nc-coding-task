import { WithClassName } from "@/utils/types";
import { PropsWithChildren } from "react";
import cn from "classnames";

type NavBurronProps = PropsWithChildren<
  {
    onClick: () => void;
  } & WithClassName
>;

const NavButton: React.FC<NavBurronProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={cn(
        "py-3 px-5 border border-black rounded-3xl uppercase text-xs font-semibold flex gap-2 hover:bg-gray-50 transition-colors",
        className
      )}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default NavButton;
