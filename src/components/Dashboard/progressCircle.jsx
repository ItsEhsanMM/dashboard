import { Box, useTheme } from "@mui/material";
import { colorShades } from "../../mui/theme";
import PropTypes from "prop-types";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   const angle = progress * 360;
   return (
      <Box
         sx={{
            background: `radial-gradient(${colors.primary[600]} 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg , #05c46b ${angle}deg 360deg),
        ${colors.black[200]}`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
         }}
      />
   );
};

ProgressCircle.propTypes = {
   progress: PropTypes.string,
   size: PropTypes.string,
};

export default ProgressCircle;
