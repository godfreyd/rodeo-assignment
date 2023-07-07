import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { FC, ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      50: "#e8eaf4",
      100: "#c6cae3",
      200: "#a1a8d1",
      300: "#7d86be",
      400: "#626bb0",
      500: "#4951a3",
      600: "#434999",
      700: "#3a408e",
      800: "#333681",
      900: "#26256b",
    },
    secondary: {
      50: "#fafbea",
      100: "#f2f3ca",
      200: "#eaeda8",
      300: "#e2e588",
      400: "#dcdf71",
      500: "#d6da5d",
      600: "#c8c857",
      700: "#b6b24f",
      800: "#a39b49",
      900: "#83763f",
      A400: "#a39b49",
    },
    info: {
      50: "#ede9f4",
      100: "#d2c8e3",
      200: "#b5a3d1",
      300: "#987ebf",
      400: "#8363b0",
      500: "#6f49a3",
      600: "#67439d",
      700: "#5b3b93",
      800: "#51358a",
      900: "#422b79",
    },
  },
});

const Theme: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
