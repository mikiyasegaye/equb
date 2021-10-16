import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#23224F",
    },
    secondary: {
      main: "#445765",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    error: {
      main: "#f00",
    },
    background: {
      default: "#fff",
    },
  },
});
