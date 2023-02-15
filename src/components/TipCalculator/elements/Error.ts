import styled from "styled-components";

const PeopleError = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.orange};
  line-height: 24px;
  position: absolute;
  top: 2px;
  right: 0;
`;

export default PeopleError;
