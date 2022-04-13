import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { ContainerHeader } from "./style";
import {
  LogoNav,
  LogoDetailBrand,
  InlineContent,
  ButtonPrimary,
  ButtonSecondary,
} from "./style.ts";

const Header = () => {
  return (
    <ContainerHeader>
      <Link to={"/"}>
        <LogoNav>
          <LogoDetailBrand>{"{"}</LogoDetailBrand>
          <Icon
            className={"iconLogo"}
            icon="carbon:json"
            height={72}
            color="#ECECEC"
          />
          <LogoDetailBrand>{"}"}</LogoDetailBrand>
        </LogoNav>
      </Link>

      <InlineContent>
        <Link to={"/home"}>
          <ButtonSecondary>Criar conta</ButtonSecondary>
        </Link>

        <Link to={"/home"}>
          <ButtonPrimary>Entrar na plataforma</ButtonPrimary>
        </Link>
      </InlineContent>
    </ContainerHeader>
  );
};

export default Header;
