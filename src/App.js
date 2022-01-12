import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // eslint-disable-next-line no-unused-vars
  withRouter
} from "react-router-dom";
 import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
 import ViewUser from "./components/users/ViewUser";
// import User from "./components/users/User";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:_id" component={EditUser} />
          <Route exact path="/users/view/:_id" component={ViewUser} />
          {/* <Route exact path="/users/:id" component={User} /> */}
          <Route component={NotFound} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
