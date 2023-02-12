import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  padding: 15px;
`;

const WrapperWithBG = styled(Wrapper)`
  background-color: ${({theme}) => theme.colors.cyan.dark};
  border-radius: 15px;
`;

export { Wrapper, WrapperWithBG };
