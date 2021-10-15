import "./assets/css/index.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./screens/About";
import Home from "./components/Home";
import Signin from "./screens/Singin";
import Connect from "./screens/Connect";
import Register from "./screens/Register";
import Footer from "./components/Footer";
import Dashbored from "./screens/Dashbored";
import CreateDream from "./screens/dreams/CreateDream";
import { Provider } from "react-redux";
import store from "./store";
import { FC } from "react";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashbored" component={Dashbored} />
            <Route exact path="/create" component={CreateDream} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
};
export default App;
