import styled from "styled-components";
interface List {
  active?: boolean | undefined;
  open?: boolean | undefined;
}
export const StyledHeadSidebar = styled.div`
  height: 50px;
  margin: 15px;
`;
export const StyledSideBar = styled.div<any>`
  position: fixed;
  width: 100%;
  z-index: 3;
  left: 0;
  top: 0;
  bottom: 0px;
  transition: 0.3s;
  color: white;
  font-size: 18px;
  max-width: 350px;
  background-color: ${({ theme }) => theme.colors.backgroundSidebar};
  @media (max-width: 768px) {
    max-width: ${(props) => (props.open ? " 350px" : "60px")};
  }
`;
export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li<List>`
  transition: 0.3s;
  margin: 10px;
  padding: 10px;
  position: relative;

  overflow: hidden;
  white-space: nowrap;
  cursor: ${(props) => (props.active ? "" : "pointer")};
  background-color: ${(props) =>
    props.active ? props.theme.colors.sidebarItemActive : ""};
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => (props.active ? "" : "gray")};
  }
  span {
    margin-left: 10px;
    display: inline-block;
  }

  @media (max-width: 768px) {
    span {
      display: ${(props) => (props.open ? "" : "none")};
    }
  }
`;
