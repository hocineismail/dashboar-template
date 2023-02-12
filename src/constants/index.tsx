import { RxDashboard } from "react-icons/rx";
import Dashboard from "../pages/dashboard";

export const navigationLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: RxDashboard,
  },
];
export const routesLink = [
  {
    name: "Dashboard",
    path: "",
    icon: RxDashboard,
    element: Dashboard,
  },
];
