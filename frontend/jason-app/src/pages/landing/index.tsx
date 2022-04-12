import { Link } from "react-router-dom";
import Header from "../../component/header";
import imagePromotional from "../../assets/pana.png";
import "./style.css";

const Landing = () => {
  return (
    <>
      <Header />
      <div className={"containerLanding"}>
        <div className={"contentBrand"}>
          <section className={"brand"}>
            <h2 className={"logoLeftBrand"}>{"{"}</h2>
            <section className={"brandName"}>
              <h4 className={"firstName"}>JASON</h4>
              <h4 className={"lastName"}>FOOD</h4>
            </section>
            <h2 className={"logoRightBrand"}>{"}"}</h2>
          </section>

          <p className={"sloganText"}>
            Não deixe que a fome te pegue desprevenido, esteja sempre preparado
            para matar aquilo que está te matando.
          </p>

          <p className={"descriptionText"}>
            Com o Jason você não morre de fome, você pode procurar suas comidas
            favoritas e ainda criar um menu com base nos dias da semana. Tenha
            todos os restaurantes na palma da sua mão e adicione seus pratos
            favoritos de qualquer lugar.
          </p>

          <section className={"contentButton"}>
            <Link to={"/"}>
              <section className={"buttonSecondaryLanding"}>
                <p className={"textButtonSecondaryLanding"}>Criar cardápio</p>
              </section>
            </Link>

            <Link to={"/"}>
              <section className={"buttonPrimaryLanding"}>
                <p className={"textButtonPrimaryLanding"}>Criar cardápio</p>
              </section>
            </Link>
          </section>
        </div>

        <img className={"imagePromotional"} src={imagePromotional} />
      </div>
    </>
  );
};

export default Landing;
