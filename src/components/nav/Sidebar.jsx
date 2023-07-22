import {
   Box,
   Divider,
   IconButton,
   Typography,
   useTheme,
   useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { colorShades } from "../../mui/theme";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

const Item = ({ title, icon, to, color, className }) => {
   return (
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
         <MenuItem className={className ? "active" : undefined} icon={icon}>
            <Typography sx={{ color: color }}>{title}</Typography>
         </MenuItem>
      </Link>
   );
};

Item.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.element.isRequired,
   to: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   className: PropTypes.any,
};

const NavSidebar = () => {
   const location = useLocation().pathname;
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
            "& .active": {
               bgcolor: colors.primary[200],
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
            backgroundColor={colors.primary[100]}
         >
            <Box
               my={1.9}
               display="flex"
               justifyContent="space-around"
               alignItems="center"
            >
               {!isCollapsed && (
                  <Typography color={colors.primary[300]} variant="h5" fontWeight={900}>
                     Dashboard
                  </Typography>
               )}
               <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
               </IconButton>
            </Box>
            <Menu>
               <Item
                  to="/"
                  className={location === "/" && "active"}
                  color={colors.black[100]}
                  icon={<DashboardIcon fontSize="small" />}
                  title="Dashboard"
               />
               {!isCollapsed ? (
                  <Typography
                     variant="h6"
                     fontWeight={900}
                     color={colors.primary[300]}
                     ml="15px"
                  >
                     Data
                  </Typography>
               ) : (
                  <Divider sx={{ my: 0.5, borderColor: "inherit" }} variant="middle" />
               )}
               <Item
                  to="/team"
                  className={location === "/team" && "active"}
                  icon={<PeopleOutlinedIcon fontSize="small" />}
                  title="Manage Team"
                  color={colors.black[100]}
               />
               <Item
                  to="/contacts"
                  className={location === "/contacts" && "active"}
                  icon={<ContactsOutlinedIcon fontSize="small" />}
                  title="Contacts Information"
                  color={colors.black[100]}
               />
               {!isCollapsed ? (
                  <Typography
                     variant="h6"
                     fontWeight={900}
                     color={colors.primary[300]}
                     ml="15px"
                  >
                     Charts
                  </Typography>
               ) : (
                  <Divider sx={{ my: 0.5, borderColor: "inherit" }} variant="middle" />
               )}

               <Item
                  to="/bar"
                  className={location === "/bar" && "active"}
                  icon={<BarChartOutlinedIcon fontSize="small" />}
                  title="Bar Chart"
                  color={colors.black[100]}
               />
               <Item
                  to="/pie"
                  className={location === "/pie" && "active"}
                  icon={<PieChartOutlineOutlinedIcon fontSize="small" />}
                  color={colors.black[100]}
                  title="Pie Chart"
               />
               <Item
                  to="/line"
                  className={location === "/line" && "active"}
                  icon={<TimelineOutlinedIcon fontSize="small" />}
                  color={colors.black[100]}
                  title="Line Chart"
               />
            </Menu>
         </Sidebar>
      </Box>
   );
};

export default NavSidebar;
