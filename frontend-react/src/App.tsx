import "./assets/css/index.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./screens/About";
import Home from "./components/Home";
import Signin from "./screens/Singin";
import Connect from "./screens/Connect";
import Register from "./screens/Register";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/connect">
            <Connect />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
