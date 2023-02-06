import React from "react";
import { CiDark } from "react-icons/ci";
import { BsSun } from "react-icons/bs";

import { ThemeContext } from "../../App";
import { StyledThemeMode } from "./StyledThemeMode";

function ThemeMode() {
  const {
    state: { theme },
    dispatch,
  } = React.useContext(ThemeContext);
  const _hanldeLightMode = () => {
    dispatch({ type: "LIGHT" });
  };

  const _hanldeDarktMode = () => {
    dispatch({ type: "DARK" });
  };
  return (
    <StyledThemeMode>
      {theme === "DARK" ? (
        <BsSun onClick={_hanldeLightMode} size={25} color={"white"} />
      ) : (
        <CiDark onClick={_hanldeDarktMode} size={25} color={"black"} />
      )}
    </StyledThemeMode>
  );
}
export default ThemeMode;
