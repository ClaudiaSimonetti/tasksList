import { Provider } from "react-redux";
import { init } from "./db";
import AppNavigator from "./navigation/index";
import { store } from "./store";

init()
  .then(() => {
    console.log("Base de datos inicializada");
  })
  .catch((err) => {
    console.log("La inicializacin de la base de datos falló.", err);
  });
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
