import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// @ts-ignore
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import "./App.css";

import { light } from "./styles/themes/light";
import { dark } from "./styles/themes/dark";

import AppSettings from "./components/appSettings/appSettings";
import GlobalStyles from "./styles/globals";
import { routesLink } from "./constants";

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
function Application() {
  return (
    <Router>
      <Routes>
        {routesLink.map((item) => (
          <Route key={item.name} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </Router>
  );
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
        <AppSettings />
        <GlobalStyles />
        <Application />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
