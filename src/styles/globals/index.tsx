import { createGlobalStyle } from "styled-components";
import { Theme } from "../themes/light";
// E1E1E1;
// nterface Props {
//   color: string;
//   backgroundColor: string;
// }i
interface ThemeProps {
  theme: Theme;
}
const GlobalStyles = createGlobalStyle<ThemeProps>`
 html, body {
    margin: 0;
    padding: 0;
    
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    }
  

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyles;
