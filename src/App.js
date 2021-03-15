import React from "react";
import Header from "./Header";
import "./App.css";
import "./firebase/config";
import "./pages/Signup";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import { UserProvider } from "./firebase/UsersProvider";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ProfileRedirect from "./router/ProfileRedirect";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <ProfileRedirect exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <ProfileRedirect exact path="/login" component={Login} />
              <Route exact path="/" component={Login} />{" "}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
