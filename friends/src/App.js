import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import FriendList from "./components/FriendList.js";
import AddFriend from "./components/FriendForm.js";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/protectedAdd">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protectedAdd" component={AddFriend} />
          <PrivateRoute path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
