import styled from "styled-components";

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.cyan.darkGrayish};
  line-height: 30px;
`;

export default Label;
