import { Box, useTheme, Typography } from "@mui/material";
import { colorShades } from "../../mui/theme";
import ProgressCircle from "./progressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);

   return (
      <Box
         border={`4px solid ${colors.primary[500]}`}
         borderRadius={3}
         py={4}
         maxWidth="100%"
         m="10px 30px"
      >
         <Box display="flex" justifyContent="space-around">
            <Box>
               {/* {icon} */}
               <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                     color: colors.black[100],
                  }}
               >
                  {title}
               </Typography>
            </Box>
            <Box>
               <ProgressCircle progress={progress} />
            </Box>
         </Box>
         <Box display="flex" justifyContent="space-around">
            <Typography
               variant="h5"
               sx={{
                  color: colors.black[400],
               }}
            >
               {subtitle}
            </Typography>
            <Typography
               variant="h5"
               fontStyle="italic"
               sx={{
                  color: colors.black[600],
               }}
            >
               {increase}
            </Typography>
         </Box>
      </Box>
   );
};

export default StatBox;
