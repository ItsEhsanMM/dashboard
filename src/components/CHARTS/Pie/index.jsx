import { Box } from "@mui/material";
import Header from "../../../shared/Header";
import Pie from "./Pie";

const PieChart = () => {
   return (
      <Box ml={4} mb={4} maxWidth="95%">
         <Header title="Pie Chart" subtitle="Simple pie chart" />

         <Box height="75vh">
            <Pie />
         </Box>
      </Box>
   );
};

export default PieChart;
