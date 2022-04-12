import { Link } from "react-router-dom";
import Header from "../../component/header";
import "./style.css";

const Home = () => {
  const mockDataRestaurant = [
    {
      id: 1,
      name: "Maximus restaurante",
      address:
        "Rua Conselheiro José Bonifacio, 70 - Cavaleiro, Jaboatão dos Guararapes - PE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquet odio nec gravida. Fusce vitae ornare massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquet odio nec gravida. Fusce vitae ornare massa.",
      urlImage:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/french-restaurant-logo-design-template-2f7896b33ab323cbc1baf240f643e82b_screen.jpg?ts=1597302426",
      manager: "Maximillium Maximus",
    },
    {
      id: 2,
      name: "Doce Sabor restaurante",
      address: "Rua Cleto Campelo 44 Sto Antonio, Recife, Pernambuco",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquet odio nec gravida. Fusce vitae ornare massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquet odio nec gravida. Fusce vitae ornare massa.",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIG8IEdSohrPhyyd-1LEWfnUo4KSXYt0R7_llr4iOg-LXvIx_Jlt9NVxJgpBrZvN9mwI&usqp=CAU",
      manager: "SweetMarry Brigadeiro",
    },
    {
      id: 3,
      name: "Da Base restaurante",
      address: "Parque das nações, Dourados, Mato Grosso do Sul",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquet odio nec gravida. Fusce vitae ornare massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquet odio nec gravida. Fusce vitae ornare massa.",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW8BXSJdIaGUddkJ4mXw9orW2KhHawg690CrTQU8OdqSCRBKx6_5FvAXkvyhqRnC6jsQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW8BXSJdIaGUddkJ4mXw9orW2KhHawg690CrTQU8OdqSCRBKx6_5FvAXkvyhqRnC6jsQ&usqp=CAU",
      manager: "The Database Postgres da Silva",
    },
  ];

  return (
    <>
      <Header />
      <div className={"contentMainHome"}>
        <section className={"welcomeTitle"}>
          <h1 className={"titleHome"}>Bem vindo</h1>
          <p className={"messageText"}>
            Agora você pode cadastrar restaurantes e suas comidas favoritas,
            tudo em um só lugar
          </p>
          <Link to={"/home"}>
            <section className={"buttonPrimaryHome"}>
              <p className={"textButtonPrimaryHome"}>Começar</p>
            </section>
          </Link>
        </section>

        <section className={"contentRestaurantList"}>
          <h3 className={"labelTopics"}>Meus restaurantes</h3>
          <hr className={"divisor"} />

          <div className={'containerCard'}>
            {mockDataRestaurant.map((restaurant) => (
              <div className={"contentCard"}>
                <img
                  className={"imageCard"}
                  src={restaurant.urlImage}
                  alt="photo-food"
                />
                <h3 className={"titleCard"}>{restaurant.name}</h3>
                <p className={"descriptionCard"}>{restaurant.description}</p>
                <button className={"buttonCard"}>
                  <p className={"textButtonCard"}>Ver cardápio</p>
                </button>
              </div>
            ))}
          </div>
        </section>
          <h3 className={"labelTopics"}>Cardápio - </h3>
          <hr className={"divisor"} />
      </div>
    </>
  );
};

export default Home;
