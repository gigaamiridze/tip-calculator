import styled from "styled-components";

const Price = styled.span`
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -1;
  color: ${({theme}) => theme.colors.cyan.strong};
  line-height: 70px;
`;

export default Price;
