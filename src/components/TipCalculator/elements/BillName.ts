import styled from "styled-components";

const BillName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.white};
  line-height: 24px;

  @media (max-width: 700px) {
    font-size: 15px;
  }

  @media (max-width: 667px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

export default BillName;
