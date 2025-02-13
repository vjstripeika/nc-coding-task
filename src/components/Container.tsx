import { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="md:max-w-screen-xl mx-auto px-6">{children}</div>;
};

export default Container;
