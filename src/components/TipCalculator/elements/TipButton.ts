import styled from "styled-components";
import { TipButtonProps } from "../../../types/tip";

const TipButton = styled.button<TipButtonProps>`
  ${({isActive, theme}) => `
    background-color: ${isActive ? theme.colors.cyan.strong : theme.colors.cyan.dark};
    color: ${isActive ? theme.colors.cyan.dark : theme.colors.white};
    font-family: ${theme.fonts.primary};
  `}
  min-width: 30%;
  height: 45px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &:hover {
    ${({theme}) => `
      background-color: ${theme.colors.cyan.strong};
      color: ${theme.colors.cyan.dark};
    `}
  }

  @media (max-width: 820px) {
    min-width: calc(50% - 8px);
  }
`;

export default TipButton;
