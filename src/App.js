import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body/Body";
import appStore from "./utils/user store/appStore";

function App() {
  
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
