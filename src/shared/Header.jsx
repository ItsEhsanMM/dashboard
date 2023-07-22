import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { colorShades } from "../mui/theme";
import PropTypes from "prop-types";

const Header = ({ title, subtitle }) => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   const mobileSize = useMediaQuery("(min-width : 468px)");

   return (
      <Box mb={4} textAlign="center">
         <Typography
            variant={!mobileSize ? "h4" : "h2"}
            fontWeight={800}
            color={colors.primary[300]}
            mb="5px"
         >
            {title}
         </Typography>
         <Typography variant="h5" color={colors.primary[400]}>
            {subtitle}
         </Typography>
      </Box>
   );
};

Header.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string.isRequired,
};

export default Header;
