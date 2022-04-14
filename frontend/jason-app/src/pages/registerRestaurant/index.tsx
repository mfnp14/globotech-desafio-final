import { useHistory } from "react-router-dom";
import api from "../../services/api";
import GenericInput from "../../component/Input";
import GenericButton from "../../component/Button";

const Register = () => {
  const navigation = useHistory();
  const history = useHistory();

  const goToPage = (page: any) => {
    history.push(`/${page}`);
  };

  const storageData = async (e: any) => {
    console.log(e)
    try {
      e.preventDefault();
      const { name, address, logoUrl, description, manager } =
        e.target.elements;
      const restaurantData: any = {
        name: name.value,
        address: address.value,
        description: description.value,
        logoUrl: logoUrl.value,
        manager: manager.value,
      };

      console.log(name, address)

      const requestApi = await api.post("restaurant", restaurantData);
      console.log(restaurantData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <h1>JSON LOGO</h1>
      </div>
      <div className="containerForm ">
        <div className="cardForm">
          <h1>Registre-se</h1>
          <form onSubmit={storageData}>
              <GenericInput
                type={''}
                name={''}
                placeholder={''}
              />
            <GenericButton
              secondary
              type="submit"
              // onclick={() => goToPage("home")}
              label={"Cadastrar restaurante"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
