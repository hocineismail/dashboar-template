import React from "react";
import Sidebar from "./sidebar/sidebar";

function Layout({ children }: any) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
export default Layout;
