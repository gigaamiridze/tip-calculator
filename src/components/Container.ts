import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;

  @media (max-width: 820px) {
    padding: 35px 0;
    row-gap: 35px;
  }

  @media (max-width: 480px) {
    padding-bottom: 0;
  }

  @media (max-width: 375px) {
    padding-top: 30px;
    row-gap: 30px;
  }
`;

export default Container;
