import styled from "styled-components";
import dollar from '../../../assets/svg/dollar.svg';

const Input = styled.input`
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
  background-image: url(${dollar});
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
