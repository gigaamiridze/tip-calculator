import styled from "styled-components";

const TipButton = styled.button`
  ${({theme}) => `
    background-color: ${theme.colors.cyan.dark};
    color: ${theme.colors.white};
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
