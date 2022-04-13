import Card, { InfoData } from "../../component/Card";
import "./style.css";

const Home = () => {
  const restaurants: InfoData[] = [
    {
      name: "Doce Sabor Restaurante",
      logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/french-restaurant-logo-design-template-2f7896b33ab323cbc1baf240f643e82b_screen.jpg?ts=1597302426",
    },
    {
      name: "Da base Restaurante",
      logo: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F28%2F19%2FLogo-268745_141343_195610032_635995249.jpg",
    },
  ];

  return (
    <div className="container">
      <Card data={restaurants} />
    </div>
  );
};

export default Home;
