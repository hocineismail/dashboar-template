import React from "react";
import { StyledSIdeBar } from "./StyledSIdeBar";

function Sidebar() {
  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  return (
    <StyledSIdeBar>
      {" "}
      <button onClick={toggleFullscreen}>Toggle Fullscreen</button>
    </StyledSIdeBar>
  );
}
export default Sidebar;
