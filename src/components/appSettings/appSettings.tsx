import React from "react";

import { StyledAppSettings } from "./StyledAppSettings";
import ThemeMode from "./themeMode";
import FullScreenSettings from "./fullScreenSettings";

function AppSettings() {
  return (
    <StyledAppSettings>
      <ThemeMode />
      <FullScreenSettings />
    </StyledAppSettings>
  );
}
export default AppSettings;
