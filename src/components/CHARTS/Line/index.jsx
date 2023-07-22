import { Box } from "@mui/material";
import Header from "../../../shared/Header";
import Line from "./Line";

const index = () => {
   return (
      <Box ml={4} mb={4} maxWidth="95%">
         <Header title="Line Chart" subtitle="Simple line chart" />

         <Box height="75vh" maxWidth="90vw">
            <Line />
         </Box>
      </Box>
   );
};

export default index;
