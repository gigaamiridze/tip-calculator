import styled from "styled-components";

const Price = styled.span`
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -1;
  color: ${({theme}) => theme.colors.cyan.strong};
  line-height: 70px;

  @media (max-width: 820px) {
    font-size: 40px;
  }

  @media (max-width: 700px) {
    font-size: 36px;
  }

  @media (max-width: 375px) {
    font-size: 32px;
    line-height: 65px;
  }
`;

export default Price;
