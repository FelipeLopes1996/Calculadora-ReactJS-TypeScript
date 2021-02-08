import * as React from "react";
import { Container } from "./style";
import { Display } from "./components/display/";
import Teclado from "./components/teclado";
import { Digito, Operador } from "../../../shared/service/types";

export const Calculadora = () => {
  const [resultado, setResultado] = React.useState<number>(0);
  const [esperarOperador, setEsperarOperador] = React.useState<boolean>(true);
  const [operador, setOperador] = React.useState<Operador>();
  const [disp, setDisp] = React.useState<string>("0");

  const calculo = (n1: number, operador: Operador): boolean => {
    let novoResult = resultado;

    switch (operador) {
      case "+":
        novoResult += n1;
        break;
      case "-":
        novoResult -= n1;
        break;
      case "x":
        novoResult *= n1;
        break;
      case "/":
        if (n1 === 0) {
          return false;
        }

        novoResult /= n1;
    }

    setResultado(novoResult);
    setDisp(novoResult.toString().toString().slice(0, 12));

    return true;
  };

  const DigitoClick = (digito: Digito) => {
    let novoDisplay = disp;

    if ((disp === "0" && digito === 0) || disp.length > 12) {
      return;
    }
    if (esperarOperador) {
      novoDisplay = "";
      setEsperarOperador(false);
    }

    if (disp !== "0") {
      novoDisplay = novoDisplay + digito.toString();
    } else {
      novoDisplay = digito.toString();
    }

    setDisp(novoDisplay);
  };

  const OperadorClick = (operado: Operador) => {
    const operando = Number(disp);

    if (typeof operador !== "undefined" && !esperarOperador) {
      if (!calculo(operando, operador)) {
        return;
      }
    } else {
      setResultado(operando);
    }

    setOperador(operado);
    setEsperarOperador(true);
  };

  const igualClick = () => {
    const operando = Number(disp);

    if (typeof operador !== "undefined" && !esperarOperador) {
      if (!calculo(operando, operador)) {
        return;
      }

      setOperador(undefined);
    } else {
      setDisp(operando.toString());
    }

    setResultado(operando);
    setEsperarOperador(true);
  };

  const allClear = () => {
    setDisp("0");
    setEsperarOperador(true);
    setResultado(0);
    setOperador(undefined);
  };

  const Clear = () => {
    setDisp("0");
    setEsperarOperador(true);
  };


  const LimpaUmDigito = () => {
    setDisp(disp.slice(0, -1));
  };

  const PointClick = () => {
    let novoDisplay = disp;

    if (esperarOperador) {
      novoDisplay = "0";
    }
    if (novoDisplay.indexOf(".") === -1) {
      novoDisplay = novoDisplay + ".";
    }

    setDisp(novoDisplay);
    setEsperarOperador(false);
  };

  return (
    <Container>
      <h1>Calculadora básica</h1>
      <Display
        value={disp}
        expression={
          typeof operador !== "undefined"
            ? `${resultado}${operador}${esperarOperador ? "" : disp}`
            : ""
        }
      />
      <Teclado
        DigitoClick={DigitoClick}
        OperadorClick={OperadorClick}
        ClearAll={allClear}
        Clear={Clear}
        Point={PointClick}
        Iguals={igualClick}
        ClearOne={LimpaUmDigito}
      />
    </Container>
  );
}