import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const FlexWrapperWithMargin = styled(FlexWrapper)`
  margin: 30px 0;
`;

export { FlexWrapper, FlexWrapperWithMargin };
