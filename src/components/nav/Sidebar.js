import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { colorShades } from "../../mui/theme";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, icon }) => {
   return (
      <MenuItem icon={icon}>
         <Typography>{title}</Typography>
      </MenuItem>
   );
};

const NavSidebar = () => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   const [isCollapsed, setIsCollapsed] = useState(false);
   return (
      <Box
         minHeight="100vh"
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
            style={{ height: "100%", border: "none" }}
            collapsed={isCollapsed}
            backgroundColor={colors.primary[700]}
         >
            <Box
               my={1.9}
               display="flex"
               justifyContent="space-around"
               alignItems="center"
            >
               {!isCollapsed && <Typography variant="h5">Dashboard</Typography>}
               <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
               </IconButton>
            </Box>
            <Menu>
               <Item icon={<DashboardIcon fontSize="small" />} title="Dashboard" />
               <Typography
                  variant="h6"
                  color={colors.black[900]}
                  sx={{ m: "15px 0 5px 20px" }}
               >
                  Data
               </Typography>
               <Item icon={<PeopleOutlinedIcon fontSize="small" />} title="Manage Team" />
               <Item
                  icon={<ContactsOutlinedIcon fontSize="small" />}
                  title="Contacts Information"
               />
               <Item
                  icon={<ReceiptOutlinedIcon fontSize="small" />}
                  title="Invoices Balances"
               />
               <Typography
                  variant="h6"
                  color={colors.black[900]}
                  sx={{ m: "15px 0 5px 20px" }}
               >
                  Pages
               </Typography>

               <Item
                  icon={<CalendarTodayOutlinedIcon fontSize="small" />}
                  title="Calendar"
               />
               <Item
                  icon={<HelpOutlineOutlinedIcon fontSize="small" />}
                  title="FAQ Page"
               />
               <Typography
                  variant="h6"
                  color={colors.black[800]}
                  sx={{ m: "15px 0 5px 20px" }}
               >
                  Charts
               </Typography>

               <Item icon={<BarChartOutlinedIcon fontSize="small" />} title="Bar Chart" />
               <Item
                  icon={<PieChartOutlineOutlinedIcon fontSize="small" />}
                  title="Pie Chart"
               />
               <Item
                  icon={<TimelineOutlinedIcon fontSize="small" />}
                  title="Line Chart"
               />
               <Item
                  icon={<MapOutlinedIcon fontSize="small" />}
                  title="Geography Chart"
               />
            </Menu>
         </Sidebar>
      </Box>
   );
};

export default NavSidebar;
