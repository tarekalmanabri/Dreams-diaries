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
import UpdateProfile from "./screens/UpdateProfile";
import { getUser } from "./actions/userActions";

const AppContent: FC = () => {
  const { auth } = useSelector((state: RootState) => state);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!auth.token && token) {
      store.dispatch({ type: "SIGN_IN", payload: token });
      getUser();

      const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        if (state.user.user) {
          unsubscribe();
        }
      });
    } else {
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/update" component={UpdateProfile} />
            <Route exact path="/create" component={CreateDream} />
          </Switch>
        </Router>
        <Footer />
      </>
    </div>
  );
};

export default AppContent;
