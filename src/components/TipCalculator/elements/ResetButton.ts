import styled from "styled-components";
import { ResetButtonProps } from "../../../types/resetButton";

const ResetButton = styled.button<ResetButtonProps>`
  ${({isDisabled, theme}) => `
    background-color: ${isDisabled ? theme.colors.darkGreen : theme.colors.cyan.strong};
    color: ${theme.colors.cyan.dark};
    font-family: ${theme.fonts.primary};
  `}
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({isDisabled, theme}) => isDisabled ? theme.colors.darkGreen : theme.colors.crystal};
  }
`;

export default ResetButton;
