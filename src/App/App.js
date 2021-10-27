import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../components/theme";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Users from "../pages/users";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/users" component={Users} />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
