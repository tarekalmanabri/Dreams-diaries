import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./screens/About";
import Home from "./components/Home";
import SignIn from "./screens/SignIn";
import Connect from "./screens/Connect";
import Register from "./screens/Register";
import Footer from "./components/Footer";
import Dashboard from "./screens/Dashboard";
import CreateDream from "./screens/dreams/CreateDream";
import { useSelector } from "react-redux";
import store, { RootState } from "./store";
import { FC, useEffect } from "react";
import Cookies from "js-cookie";
import EditProfile from "./screens/EditProfile";
import Password from "./components/EditProfile/Password";
import Email from "./components/EditProfile/Email";
import Username from "./components/EditProfile/Username";

const AppContent: FC = () => {
  const { auth } = useSelector((state: RootState) => state);

  useEffect(() => {
    const token = Cookies.get("token");

    console.log(auth);
    console.log(token);

    if (!auth.token && token) {
      store.dispatch({ type: "SIGN_IN", payload: token });
    }
  }, [auth]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/connect" component={Connect} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/edit" component={EditProfile} />
          <Route exact path="/email" component={Email} />
          <Route exact path="/username" component={Username} />
          <Route exact path="/password" component={Password} />
          <Route exact path="/create" component={CreateDream} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default AppContent;
