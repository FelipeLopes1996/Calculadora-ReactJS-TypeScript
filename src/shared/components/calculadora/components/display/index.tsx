import * as React from "react";

import { Disp, Tela, TelaExpressao } from "./style";
interface IDisplay {
  value: string;
  expression: string;
}

export const Display: React.FC<IDisplay> = ({ value, expression }) => {
  return (
    <Disp>
      <TelaExpressao>{expression}</TelaExpressao>
      <Tela>{value}</Tela>
    </Disp>
  );
};
