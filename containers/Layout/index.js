import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { theme } from "../../theme";
import { GlobalCSS } from "../../public/styles/style";
import MyHeader from "../../components/molecule/MyHeader";
import MyFooter from "../../components/molecule/MyFooter";

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/pgv8psy.css" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>
      <GlobalCSS />
      <MyHeader />
      {children}
     <MyFooter />
    </ThemeProvider>
  );
};

export default Layout;
