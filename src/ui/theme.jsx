import { createTheme } from "@material-ui/core";

//definição do tema, alterar aqui mudara em todo o sistema
const theme = createTheme({
  palette: {
    primary: {
      light: "#c4d9ff",
      main: "#0048FC",
      dark: "#0000FF",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#00D34D",
      dark: "#2d3142",
    }, 
    
    text: {
      primary: "#707070",
      secondary: "#Ffff",
      disabled: "#C8C8C8",
    },
    error: {
      main: "#f51d1d",
    },
    warning: {
      main: "#FFCC00",
    },
    success: {
      main: "#00ff5e",
    },
    background: {},
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
  shape: {
    borderRadius: "3px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});
export default theme;