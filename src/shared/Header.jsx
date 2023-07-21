import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { colorShades } from "../mui/theme";

const Header = ({ title, subtitle }) => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   const mobileSize = useMediaQuery("(min-width : 468px)");

   return (
      <Box mb={4} textAlign="center">
         <Typography
            variant={!mobileSize ? "h4" : "h2"}
            fontWeight={800}
            color={colors.primary[700]}
            mb="5px"
         >
            {title}
         </Typography>
         <Typography variant="h5" color={colors.secondary[600]}>
            {subtitle}
         </Typography>
      </Box>
   );
};

export default Header;
