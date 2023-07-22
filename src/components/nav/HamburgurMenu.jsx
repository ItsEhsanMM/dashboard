import {
   Box,
   Divider,
   Icon,
   IconButton,
   Menu,
   MenuItem,
   Typography,
   useMediaQuery,
   useTheme,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { colorShades } from "../../mui/theme";

//icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

const ItemSetting = ({ title, icon, to, closeFunc }) => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   return (
      <>
         <MenuItem
            onClick={closeFunc}
            sx={{
               width: "90vw",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <Link
               to={to}
               style={{
                  textDecoration: "none",
                  color: colors.black[200],
                  width: "100%",
               }}
            >
               <Box
                  display="flex"
                  gap={1}
                  alignItems="center"
                  justifyContent="center"
                  height="inherit"
               >
                  <Icon
                     sx={{
                        mb: 0.5,
                     }}
                  >
                     {icon}
                  </Icon>
                  <Typography variant="h6">{title}</Typography>
               </Box>
            </Link>
         </MenuItem>
         <Divider />
      </>
   );
};
ItemSetting.propTypes = {
   title: PropTypes.string,
   icon: PropTypes.element,
   to: PropTypes.string,
   closeFunc: PropTypes.func,
};

const items = [
   { title: "dashboard", icon: <DashboardIcon />, to: "/" },
   { title: "Manage Team", icon: <PeopleOutlinedIcon />, to: "/team" },
   { title: "Contacts Information", icon: <ContactsOutlinedIcon />, to: "/contacts" },
   { title: "Bar Chart", icon: <BarChartOutlinedIcon />, to: "/bar" },
   { title: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, to: "/pie" },
   { title: "Line Chart", icon: <TimelineOutlinedIcon />, to: "/line" },
];

const HamburgerMenu = () => {
   const [isOpen, setIsOpen] = useState(false);
   const tablet = useMediaQuery("(min-width:768px)");

   const handleOpen = () => {
      setIsOpen(!isOpen);
   };

   return (
      <Box display={tablet ? "none" : "block"}>
         <Box position="absolute" top={10} left={14}>
            <IconButton onClick={handleOpen}>
               <MenuOutlinedIcon fontSize="large" />
            </IconButton>
         </Box>
         <Box maxWidth="100%">
            <Menu
               sx={{
                  mt: 6.8,
                  width: "100%",
               }}
               anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
               }}
               anchorEl={isOpen}
               keepMounted
               transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
               }}
               open={isOpen}
               onClose={() => setIsOpen(false)}
            >
               {items.map((elem, index) => (
                  <ItemSetting
                     key={index}
                     title={elem.title}
                     icon={elem.icon}
                     to={elem.to}
                     closeFunc={handleOpen}
                  />
               ))}
            </Menu>
         </Box>
      </Box>
   );
};

export default HamburgerMenu;
