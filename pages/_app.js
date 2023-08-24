// App.js

import React from "react";
import Navbar from "../components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/_global.scss"; // Import global styles

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
