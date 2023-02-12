import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexBoxWithMargin = styled(FlexBox)`
  margin-top: 25px;
`;

export { FlexBox, FlexBoxWithMargin };
