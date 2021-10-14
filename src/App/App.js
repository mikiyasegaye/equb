import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Dashboard from "../pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect exact from="/" to="/dashboard" />
        </Switch>
      </Router>
      <CssBaseline />
    </>
  );
}

export default App;
