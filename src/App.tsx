import React, { createContext, useReducer } from "react";
// @ts-ignore
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "./styles/globals";
import { light } from "./styles/themes/light";
import { dark } from "./styles/themes/dark";
import ThemeMode from "./components/theme/ThemeMode";
import Dashboard from "./pages/dashboard";

interface ThemeInit {
  ready: boolean;
  theme: string;
}

interface ThemeAction {
  type: string;
}
export const initialState: ThemeInit = {
  theme: "LIGTH",
  ready: false,
};
export const ThemeContext = createContext<any>(initialState);

function reducer(state: ThemeInit, action: ThemeAction): any {
  switch (action.type) {
    case "LIGHT":
      return { ...state, theme: "LIGHT", ready: true };
    case "DARK":
      return { ...state, theme: "DARK", ready: true };
    default:
      throw new Error();
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    if (window.localStorage.getItem("theme") !== "LIGHT") {
      dispatch({ type: "DARK" });
    } else {
      dispatch({ type: "LIGHT" });
    }
  }, []);
  React.useEffect(() => {
    if (state.ready) {
      window.localStorage.setItem("theme", state.theme);
    }
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme === "DARK" ? dark : light}>
        <ThemeMode />
        <GlobalStyles />
        <Dashboard />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
