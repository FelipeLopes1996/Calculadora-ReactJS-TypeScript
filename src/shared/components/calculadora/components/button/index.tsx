import * as React from "react";

import { Buton } from "./style";
// type Props = {};
export interface IButton {
  children?: React.ReactNode;
  onClick?: () => void
  isLarge?: boolean
}

// export const Button: React.FC<IProps> = ({ children }) => {
export const Botao: React.FC<IButton> = ({ onClick, children, isLarge }) => {
  return <Buton onClick={onClick} isLarge={isLarge}>{children}</Buton>;
};
