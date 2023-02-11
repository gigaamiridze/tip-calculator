import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px;
  padding: 25px;
  display: flex;
  column-gap: 20px;
`;

export default Card;
