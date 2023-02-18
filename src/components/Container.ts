import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;

  @media (max-width: 820px) {
    padding: 75px 0 35px;
    row-gap: 35px;
  }
`;

export default Container;
