import * as React from "react";

import { Calculadora } from "./shared/components/calculadora";
import GlobalStyle from "./shared/style/global";

type Props = {};
export const App = (props: Props) => {
  return (
    <>
      <GlobalStyle />
      <Calculadora />
    </>
  );
};
