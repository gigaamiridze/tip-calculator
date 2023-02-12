import styled from "styled-components";

const PerPerson = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.cyan.grayish};
  line-height: 19px;
`;

export default PerPerson;
