import styled from "styled-components";

const ContentContainer = styled.div`
  width: 50%;
  padding: 15px;

  @media (max-width: 667px) {
    width: 100%;
    padding: 10px;
  }
`;

const ContentContainerWithBG = styled(ContentContainer)`
  background-color: ${({theme}) => theme.colors.cyan.dark};
  border-radius: 15px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 667px) {
    padding: 22px;
  }
`;

export { ContentContainer, ContentContainerWithBG };
