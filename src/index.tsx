import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";

import { CV } from "./cv/CV";
import { data } from "./cv/cvData";

const theme = extendTheme({
  typography: {
    fonts: {
      heading: `Karla, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
    }
  }
});

render(
  <ChakraProvider theme={theme}>
    <CV {...data} />
  </ChakraProvider>,
  document.getElementById("root")
);
