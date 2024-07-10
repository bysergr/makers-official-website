import pkg from "@material-tailwind/react";
const { ThemeProvider } = pkg; 

function ThemeProviderAstro({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
 
export default ThemeProviderAstro;