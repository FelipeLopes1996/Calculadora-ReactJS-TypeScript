import React from "react";
import { Botao } from "../button";
import { Digito, Operador } from "../../../../service/types";
import { Container } from "./style";

interface ITeclas {
  DigitoClick: (digit: Digito) => void;
  OperadorClick: (operador: Operador) => void;
  ClearAll: () => void;
  ClearOne: () => void;
  Clear: () => void;
  Point: () => void;
  Iguals: () => void;
}

const Teclado: React.FC<ITeclas> = ({
  DigitoClick,
  OperadorClick,
  ClearAll,
  Clear,
  ClearOne,
  Point,
  Iguals,
}) => {
  const handleKey = React.useCallback(({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode);

    if (keyCode > 48 && keyCode < 57 && !shiftKey) {
      DigitoClick((keyCode - 48) as Digito);
    } else if (keyCode > 96 && keyCode < 105) {
      DigitoClick((keyCode - 96) as Digito);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      OperadorClick("+");
    } else if (keyCode === 109 || keyCode === 189) {
      OperadorClick("-");
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      OperadorClick("x");
    } else if (keyCode === 111 || keyCode === 191) {
      OperadorClick("/");
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      Iguals();
    }
  },[DigitoClick, OperadorClick, Iguals]);
  React.useEffect(() => {
    document.body.addEventListener("keydown", handleKey);
    return () => document.body.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <Container>
      <Botao onClick={() => ClearOne()}>{`<`}</Botao>
      <Botao onClick={() => Clear()}>C</Botao>
      <Botao onClick={() => ClearAll()}>AC</Botao>
      <Botao onClick={() => OperadorClick("+")}>+</Botao>
      <Botao onClick={() => DigitoClick(1)}>1</Botao>
      <Botao onClick={() => DigitoClick(2)}>2</Botao>
      <Botao onClick={() => DigitoClick(3)}>3</Botao>
      <Botao onClick={() => OperadorClick("/")}>/</Botao>
      <Botao onClick={() => DigitoClick(4)}>4</Botao>
      <Botao onClick={() => DigitoClick(5)}>5</Botao>
      <Botao onClick={() => DigitoClick(6)}>6</Botao>
      <Botao onClick={() => OperadorClick("x")}>x</Botao>
      <Botao onClick={() => DigitoClick(7)}>7</Botao>
      <Botao onClick={() => DigitoClick(8)}>8</Botao>
      <Botao onClick={() => DigitoClick(9)}>9</Botao>
      <Botao onClick={() => OperadorClick("-")}>-</Botao>
      <Botao onClick={() => Point()}>.</Botao>
      <Botao onClick={() => DigitoClick(0)}>0</Botao>
      <Botao onClick={() => Iguals()} isLarge={true}>
        =
      </Botao>
    </Container>
  );
};

export default Teclado;
