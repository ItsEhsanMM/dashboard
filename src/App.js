import { useMode, colorModeContext } from "./mui/theme";
import "./App.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/nav/Topbar";
import NavSidebar from "./components/nav/Sidebar";

function App() {
   const [colorMode, theme] = useMode();
   return (
      <colorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display="flex">
               <NavSidebar />
               <Topbar />
            </Box>
         </ThemeProvider>
      </colorModeContext.Provider>
   );
}

export default App;
