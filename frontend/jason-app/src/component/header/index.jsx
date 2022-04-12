import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className={"containerHeader"}>
      <Link to={'/'}>
        <section className={"logoNav"}>
          <h2 className={"logoLeft"}>{"{"}</h2>
          <Icon icon="carbon:json" height={72} color="#ECECEC" />
          <h2 className={"logoRight"}>{"}"}</h2>
        </section>
      </Link>

      <Link to={'/home'}>
        <section className={'buttonPrimary'}>
          <p className={'textButtonPrimary'}>Criar cardápio</p>
        </section>
      </Link>
    </div>
  );
};

export default Header;
