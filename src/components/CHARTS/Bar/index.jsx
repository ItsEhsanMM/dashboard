import Bar from "./barchart";
import Header from "../../../shared/Header";
import { Box } from "@mui/material";

const BarChart = () => {
   return (
      <Box ml={4} mb={4} maxWidth="95%">
         <Header title="Bar Chart" subtitle="Simple bar chart" />
         <Box height="75vh" maxWidth="90vw">
            <Bar />
         </Box>
      </Box>
   );
};

export default BarChart;
