export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  font: {
    primary: string;
    secondary: string;
  };
  borderRadius: string;
}
export const light: Theme = {
  colors: {
    primary: "#E1E1E1",
    secondary: "#fafafa",
    background: "#fff",
    text: "#333",
  },
  font: {
    primary: "Open Sans, sans-serif",
    secondary: "Roboto, sans-serif",
  },
  borderRadius: "3px",
};
