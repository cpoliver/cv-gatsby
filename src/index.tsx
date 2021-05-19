import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

import { CV } from "./cv/CV";
import { data } from "./cv/cvData";

const App = () => <CV {...data} />;

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
