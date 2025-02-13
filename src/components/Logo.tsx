import Image from "next/image";
import logoSrc from "@/assets/logo.svg";

const Logo: React.FC = () => (
  <Image
    priority
    src={logoSrc}
    alt="NeckCare"
    height={18}
    className="inline-block"
  />
);

export default Logo;
