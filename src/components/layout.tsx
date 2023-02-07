import React from "react";
import Sidebar from "./sidebar/sidebar";
import styled from "styled-components";
import Navbar from "./navbar/navbar";
const StyledMainContainer = styled.div`
  margin-left: 60px;
  margin-top: 60px;
  transition: 0.3s;
  @media (min-width: 768px) {
    margin-left: 350px;
  }
`;
const StyledContainer = styled.div`
  padding: 10px;
`;
function Layout({ children }: any) {
  return (
    <>
      <Sidebar />
      <StyledMainContainer>
        <Navbar />
        <StyledContainer>{children}</StyledContainer>
      </StyledMainContainer>
    </>
  );
}
export default Layout;
