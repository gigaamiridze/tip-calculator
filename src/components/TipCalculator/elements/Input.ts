import styled from "styled-components";
import { InputProps } from "../../../types/input";
import dollar from '../../../assets/svg/dollar.svg';
import person from '../../../assets/svg/person.svg';

const icon = (props: InputProps) => {
  switch (props.iconType) {
    case "bill":
      return dollar;
    case "person":
      return person;
    default:
      return "";
  }
}

const Input = styled.input<InputProps>`
  ${({theme}) => `
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.cyan.dark};
    background-color: ${theme.colors.cultured};
  `}
  width: 100%;
  height: 45px;
  font-size: 24px;
  font-weight: 700;
  text-align: right;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: left 20px center;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-right: 17px;
  transition: all 0.1s ease-in-out;

  &::placeholder {
    color: ${({theme}) => theme.colors.cyan.dark};
    opacity: 0.35;
  }

  &:hover {
    outline: 2px solid ${({theme}) => theme.colors.cyan.strong};
  }
`;

export default Input;
