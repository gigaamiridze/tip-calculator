import styled from "styled-components";
import { TipButtonProps } from "../../../types/tipButton";

const TipButton = styled.button<TipButtonProps>`
  ${({isActive, theme}) => `
    background-color: ${isActive ? theme.colors.cyan.strong : theme.colors.cyan.dark};
    color: ${isActive ? theme.colors.cyan.dark : theme.colors.white};
    font-family: ${theme.fonts.primary};
  `}
  max-width: 117px;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
`;

export default TipButton;
