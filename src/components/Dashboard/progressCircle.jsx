import { Box, useTheme } from "@mui/material";
import { colorShades } from "../../mui/theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);
   const angle = progress * 360;
   return (
      <Box
         sx={{
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg , ${colors.black[500]} ${angle}deg 360deg)`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
         }}
      />
   );
};

export default ProgressCircle;
