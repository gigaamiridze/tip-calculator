import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexBoxWithMargin = styled(FlexBox)`
  margin-top: 25px;

  @media (max-width: 667px) {
    margin-top: 0;
  }
`;

export { FlexBox, FlexBoxWithMargin };
