import styled from "styled-components";

const ContentContainer = styled.div`
  width: 50%;
  padding: 15px;
`;

const ContentContainerWithBG = styled(ContentContainer)`
  background-color: ${({theme}) => theme.colors.cyan.dark};
  border-radius: 15px;
`;

export { ContentContainer, ContentContainerWithBG };
