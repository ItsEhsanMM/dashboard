import { useMode, colorModeContext } from "./mui/theme";
import "./App.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/nav/Topbar";
import NavSidebar from "./components/nav/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Dashboard from "./components/Dashboard";
// Data components
import Team from "./components/DATA/Team";
import Contact from "./components/DATA/Contact";

// Charts components
import Bar from "./components/CHARTS/Bar";
import Pie from "./components/CHARTS/Pie";
import Line from "./components/CHARTS/Line";
import HamburgerMenu from "./components/nav/HamburgurMenu";

function App() {
   const [colorMode, theme] = useMode();

   return (
      <colorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box container display="flex">
               <NavSidebar />
               <HamburgerMenu />
               <Box display="flex" flexDirection="column" minWidth="10%" width="100%">
                  <Topbar />
                  <Box mt={8}>
                     <Routes>
                        <Route path="/*" element={<Navigate to="/" />} />
                        <Route path="/" element={<Dashboard />} />
                        {/* Data */}
                        <Route path="/team" element={<Team />} />
                        <Route path="/contacts" element={<Contact />} />
                        {/* Charts */}
                        <Route path="/bar" element={<Bar />} />
                        <Route path="/pie" element={<Pie />} />
                        <Route path="/line" element={<Line />} />
                     </Routes>
                  </Box>
               </Box>
            </Box>
         </ThemeProvider>
      </colorModeContext.Provider>
   );
}

export default App;
