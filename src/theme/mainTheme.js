import { createTheme, responsiveFontSizes } from "@mui/material";
export const mainTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#2b9cce",
      },
    },
    typography: {
      color: "gray",
      fontFamily: "sans-serif",
    },
    components: {},
  })
);

mainTheme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (max-width:600px)": {
    fontSize: "1rem",
  },
  [mainTheme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

mainTheme.typography.h5 = {
  fontSize: "1.2rem",
  "@media (max-width:600px)": {
    fontSize: ".8rem",
  },
  [mainTheme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};
mainTheme.typography.h6 = {
  fontSize: "1.2rem",
  "@media (max-width:600px)": {
    fontSize: ".8rem",
  },
  [mainTheme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};
