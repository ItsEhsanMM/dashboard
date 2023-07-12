import { useContext } from "react";
import { Box, useTheme, IconButton } from "@mui/material";
import { colorModeContext, colorShades } from "../../mui/theme";

// icons
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Topbar = () => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   const colorMode = useContext(colorModeContext);
   return (
      <Box
      width='100%'
      height='70px'
         display="flex"
         justifyContent="flex-end"
         p={2}
         backgroundColor={colors.primary[700]}
         
      >
         <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
               {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
               ) : (
                  <LightModeOutlinedIcon />
               )}
            </IconButton>
            <IconButton>
               <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton>
               <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
               <PersonOutlineOutlinedIcon />
            </IconButton>
         </Box>
      </Box>
   );
};

export default Topbar;
