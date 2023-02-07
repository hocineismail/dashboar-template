import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 60px;
  border-bottom: 1px solid gray;
  position: fixed;
  top: 0;
  right: 0;
  left: 350px;
  transition: 0.3s;
  z-index: 2;
  @media (max-width: 768px) {
    left: 60px;
  }
`;
