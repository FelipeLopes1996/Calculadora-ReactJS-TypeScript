import styled, { css } from "styled-components";
import { IButton } from './index'

export const Buton = styled.button<IButton>`
  font-family: inherit;
  font-size: inherit;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  /* $ {({ color }) => colorToCss(color)} */
  ${({ isLarge }) =>
    isLarge &&
    css`
      grid-column-end: span 2;
    `}
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;
