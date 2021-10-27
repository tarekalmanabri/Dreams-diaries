import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import Connect from "./screens/Connect";
import Register from "./screens/Register";
import Footer from "./components/Footer";
import Dashboard from "./screens/Dashboard";
import CreateDream from "./screens/dreams/CreateDream";
import { useSelector } from "react-redux";
import store, { RootState } from "./store";
import { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import UpdateProfile from "./screens/UpdateProfile";
import { getUser } from "./actions/userActions";

const AppContent: FC = () => {
  const { auth } = useSelector((state: RootState) => state);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!auth.token && token) {
      store.dispatch({ type: "SIGN_IN", payload: token });

      const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        if (state.user) {
          unsubscribe();
          setReady(true);
        }
      });

      getUser().catch(() => {
        Cookies.set("token", "");
        store.dispatch({ type: "SIGN_OUT" });
        setReady(true);
        return;
      });
    } else {
      setReady(true);
    }
    // eslint-disable-next-line
  }, []);

  return ready ? (
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
            <Route exact path="/dreams" component={Dashboard} />
            <Route exact path="/update" component={UpdateProfile} />
            <Route exact path="/dreams/create" component={CreateDream} />
          </Switch>
        </Router>
        <Footer />
      </>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default AppContent;
