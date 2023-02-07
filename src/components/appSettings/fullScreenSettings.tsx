import React from "react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
function FullScreenSettings() {
  const [fullScreen, setFullScreen] = React.useState<boolean>(false);
  const toggleFullscreen = () => {
    //this one works only with chrome
    //we will make soon the rest of browser
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
      setFullScreen(true);
    }
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  return (
    <>
      {fullScreen ? (
        <BiFullscreen
          onClick={toggleFullscreen}
          size={25}
          style={{ marginLeft: "10px" }}
        />
      ) : (
        <BiExitFullscreen
          onClick={toggleFullscreen}
          size={25}
          style={{ marginLeft: "10px" }}
        />
      )}
    </>
  );
}
export default FullScreenSettings;
