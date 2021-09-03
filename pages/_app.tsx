import { AppProps } from "next/dist/shared/lib/router/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  createTheme,
  ThemeProvider as MaterialUIProvider,
} from "@material-ui/core/styles";
import { primary, secondary } from "../config/theme";
import emailjs from "emailjs-com";
import "../public/gordita/style.css";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  strong {
    font-family: "Gordita Bold";
    font-weight: normal;
  }
`;

const theme = {
  colors: {
    primary,
  },
};

const materialUITheme = createTheme({
  palette: {
    primary: {
      main: secondary,
    },
    secondary: {
      main: primary,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    emailjs.init("user_Fzkv3indfnz1CZS6TMJTM");
  }, []);
  return (
    <MaterialUIProvider theme={materialUITheme}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MaterialUIProvider>
  );
}
