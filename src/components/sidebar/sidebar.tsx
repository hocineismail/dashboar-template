import React from "react";
import {
  StyledSideBar,
  StyledList,
  StyledListItem,
  StyledHeadSidebar,
} from "./StyledSideBar";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";

function Sidebar() {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledSideBar open={open}>
      <StyledHeadSidebar>
        <RiMenu2Line
          style={{
            position: "absolute",
            right: "30px",
            top: "10px",
            cursor: "pointer",
          }}
          color="white"
          onClick={() => setOpen(!open)}
        />
        {/* <img
          width={30}
          src="https://ismailhocine.com/static/media/logo-ismailhocine.b54bec46.png"
          alt="logo"
        /> */}
      </StyledHeadSidebar>
      <StyledList>
        <StyledListItem active open={open}>
          <RxDashboard size={17} />
          <span>Dashboard</span>
        </StyledListItem>
        <StyledListItem open={open}>
          <FiUsers size={17} />
          <span>Users</span>
        </StyledListItem>
        <StyledListItem open={open}>
          <FiUsers size={17} />
          <span>Users</span>
        </StyledListItem>
      </StyledList>
    </StyledSideBar>
  );
}
export default Sidebar;
