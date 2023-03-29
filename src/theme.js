import { createTheme, responsiveFontSizes } from "@mui/material"

const theme = createTheme({
  body: {
    backgroundColor: "#222",
  },
  palette: {
    primary: {
      main: "#23A8E9",
    },
    background: {
      default: "#EFEFEF",
    },
  },
  typography: {
    h6: {
      color: "white",
    },
  },
  input: {
    outlined: {
      background: "white",
    },
  },
  textField: {
    background: 'white',
  }
});

export default responsiveFontSizes(theme)
