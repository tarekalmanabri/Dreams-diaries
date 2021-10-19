import "./assets/css/index.css";
import { Provider } from "react-redux";
import store from "./store";
import { FC } from "react";
import AppContent from "./AppContent";

const App: FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;
