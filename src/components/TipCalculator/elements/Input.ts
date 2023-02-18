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
  ${({isError, theme}) => `
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.cyan.dark};
    background-color: ${theme.colors.cultured};
    border: 2px solid ${isError ? theme.colors.orange : theme.colors.cultured};
  `}
  width: 100%;
  height: 45px;
  font-size: 24px;
  font-weight: 700;
  text-align: right;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: left 20px center;
  outline: none;
  border-radius: 5px;
  padding-right: 17px;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: ${({theme}) => theme.colors.cyan.dark};
    opacity: 0.35;
  }

  &:hover {
    border: 2px solid ${({isError, theme}) => isError ? theme.colors.orange : theme.colors.cyan.strong};
  }

  @media (max-width: 375px) {
    height: 42px;
    font-size: 20px; 
    padding-right: 15px;
    background-position: left 15px center;
  }
`;

const CustomInput = styled(Input)`
  width: 30%;
  padding-right: 0;
  text-align: center;

  @media (max-width: 820px) {
    width: calc(50% - 8px);
  }
`;

export { Input, CustomInput };
