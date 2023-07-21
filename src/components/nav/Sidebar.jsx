import {
   Box,
   Divider,
   IconButton,
   Typography,
   useTheme,
   useMediaQuery,
} from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { colorShades } from "../../mui/theme";
import { Link } from "react-router-dom";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

const Item = ({ title, icon, to }) => {
   return (
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
         <MenuItem icon={icon}>
            <Typography>{title}</Typography>
         </MenuItem>
      </Link>
   );
};

const NavSidebar = () => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   const [isCollapsed, setIsCollapsed] = useState(true);
   const tablet = useMediaQuery("(min-width:768px)");


   useEffect(() => {
      tablet && setIsCollapsed(false);
   }, [tablet]);

   return (
      <Box
         minHeight="100vh"
         mb={0}
         sx={{
            userSelect: "none",
            "& .ps-menu-button:hover": {
               bgcolor: `${colors.primary[800]} !important`,
               transition: "all 0.2s ease",
            },
            "& .ps-menu-button:active": {
               bgcolor: `${colors.primary[900]} !important`,
            },
         }}
      >
         <Sidebar
            style={{ height: "100%", maxWidth: "100%", border: "none" }}
            collapsed={isCollapsed}
            collapsedWidth="80px"
            backgroundColor={colors.primary[700]}
         >
            <Box
               my={1.9}
               display="flex"
               justifyContent="space-around"
               alignItems="center"
            >
               {!isCollapsed && (
                  <Typography variant="h5" fontWeight={900}>
                     Dashboard
                  </Typography>
               )}
               <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
               </IconButton>
            </Box>
            <Menu>
               <Item to="/" icon={<DashboardIcon fontSize="small" />} title="Dashboard" />
               {!isCollapsed ? (
                  <Typography
                     variant="h6"
                     fontWeight={900}
                     color={colors.black[900]}
                     ml="15px"
                  >
                     Data
                  </Typography>
               ) : (
                  <Divider sx={{ my: 0.5, borderColor: "inherit" }} variant="middle" />
               )}
               <Item
                  to="/team"
                  icon={<PeopleOutlinedIcon fontSize="small" />}
                  title="Manage Team"
               />
               <Item
                  to="/contacts"
                  icon={<ContactsOutlinedIcon fontSize="small" />}
                  title="Contacts Information"
               />
               {!isCollapsed ? (
                  <Typography
                     variant="h6"
                     fontWeight={900}
                     color={colors.black[900]}
                     ml="15px"
                  >
                     Charts
                  </Typography>
               ) : (
                  <Divider sx={{ my: 0.5, borderColor: "inherit" }} variant="middle" />
               )}

               <Item
                  to="/bar"
                  icon={<BarChartOutlinedIcon fontSize="small" />}
                  title="Bar Chart"
               />
               <Item
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon fontSize="small" />}
                  title="Pie Chart"
               />
               <Item
                  to="/line"
                  icon={<TimelineOutlinedIcon fontSize="small" />}
                  title="Line Chart"
               />
            </Menu>
         </Sidebar>
      </Box>
   );
};

export default NavSidebar;
