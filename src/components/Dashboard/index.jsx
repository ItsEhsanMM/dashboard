import { colorShades } from "../../mui/theme";
import Header from "../../shared/Header";
import { Box, Button, Grid, useTheme } from "@mui/material";
import StatBox from "./StatBox";
import Line from "../CHARTS/Line/Line";
import Bar from "../CHARTS/Bar/barchart";
import Pie from "../CHARTS/Pie/Pie";

//icons
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";

const index = () => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);

   return (
      <Box>
         <Header title="dashboard" subtitle="Welcome to Dashboard" />
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box mb={6} mr={4} width="100%" display="flex" justifyContent="flex-end">
               <Button
                  sx={{
                     bgcolor: colors.primary[100],
                     color: colors.black[100],
                     ":hover": {
                        bgcolor: colors.primary[300],
                     },
                     fontSize: "14px",
                     fontWeight: "bold",
                     p: "10px 20px",
                  }}
                  startIcon={<DownloadOutlinedIcon />}
               >
                  Download reports
               </Button>
            </Box>
         </Box>
         {/* Grid */}
         <Grid container>
            {/* row 1 */}

            <Grid item xs={12} md={6} lg={4}>
               <StatBox
                  title="12,361"
                  subtitle="Emails sent"
                  icon={<EmailOutlinedIcon fontSize="large" />}
                  progress="0.75"
                  increase="+14%"
               />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
               <StatBox
                  title="431,225"
                  subtitle="sales obtaine"
                  icon={<AttachMoneyOutlinedIcon fontSize="large" />}
                  progress="0.5"
                  increase="+21%"
               />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
               <StatBox
                  title="32,441"
                  subtitle="New Clients"
                  icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
                  progress="0.3"
                  increase="+14%"
               />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
               <StatBox
                  title="1,3325,134"
                  subtitle="Traffic Inbound"
                  icon={<TrafficOutlinedIcon fontSize="large" />}
                  progress="0.8"
                  increase="+43%"
               />
            </Grid>
            <Grid item xs={12} lg={12}>
               <Box height="75vh" maxWidth="100%">
                  <Line isDashboard={true} />
               </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
               <Box height="75vh" maxWidth="100%">
                  <Bar isDashboard={true} />
               </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
               <Box height="75vh" maxWidth="100%">
                  <Pie />
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default index;
