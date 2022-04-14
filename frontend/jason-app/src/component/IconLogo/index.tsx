import { Icon } from "@iconify/react";
import { LogoDetailBrand, LogoNav } from "./styles";

interface IconLogoProps {
  width?: number;
  height?: number;
}

const IconLogo: React.FC<IconLogoProps> = ({ width, height }) => {
  return (
    <LogoNav>
      <LogoDetailBrand>{"{"}</LogoDetailBrand>
      <Icon
        className={"iconLogo"}
        icon="carbon:json"
        height={height}
        width={width}
        color="#5463FF"
      />
      <LogoDetailBrand>{"}"}</LogoDetailBrand>
    </LogoNav>
  );
};

export default IconLogo;
