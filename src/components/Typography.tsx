import cn from "classnames";
import { createElement } from "react";
import type { HTMLAttributes, PropsWithChildren } from "react";

import type { WithClassName } from "@/utils/types";

type TyporgaphyVariants = "p" | "small" | "h1" | "h2" | "h3";

type TypographyStyles = Record<
  TyporgaphyVariants,
  HTMLAttributes<HTMLElement>["className"]
>;

type TypographyProps = PropsWithChildren<
  {
    variant?: TyporgaphyVariants;
  } & WithClassName
>;

const styles: TypographyStyles = {
  p: "py-3 text-lg",
  small: "py-0 text-sm block",
  h1: "py-3 text-4xl md:text-6xl font-semibold",
  h2: "py-3 text-3xl md:text-4xl font-semibold",
  h3: "py-3 text-2xl md:text-3xl font-semibold text-muted",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "p",
  className,
  ...props
}) => {
  const baseClassName = styles[variant];
  return createElement(
    variant,
    { ...props, className: cn(baseClassName, className) },
    children
  );
};

export default Typography;
