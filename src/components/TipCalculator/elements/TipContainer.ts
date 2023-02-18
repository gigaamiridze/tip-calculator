import styled from "styled-components";

const TipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 375px) {
    gap: 12px; 
  }
`;

export default TipContainer;
