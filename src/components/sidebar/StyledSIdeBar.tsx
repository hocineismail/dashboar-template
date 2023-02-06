import styled from "styled-components";

export const StyledSIdeBar = styled.div`
  max-width: 350px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0px;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.backgroundSidebar};
`;
