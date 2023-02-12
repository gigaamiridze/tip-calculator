import styled from "styled-components";

const BillName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.white};
  line-height: 24px;
`;

export default BillName;
