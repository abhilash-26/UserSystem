import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDetail from "./components/UserDetail";
import ModifyUser from "./components/ModifyUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user-detail" component={UserDetail} />
          <Route path="/modify-user" component={ModifyUser} />
        </Switch>
      </Router>
      {/* <Register />
      <UserDetail />
      <ModifyUser />
      <Login /> */}
    </div>
  );
}

export default App;
