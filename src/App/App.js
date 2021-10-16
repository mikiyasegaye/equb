import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Dashboard from "../pages/dashboard";
import Users from "../pages/users";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/users" component={Users} />
          <Redirect exact from="/" to="/dashboard" />
        </Switch>
      </Router>
      <CssBaseline />
    </>
  );
}

export default App;
