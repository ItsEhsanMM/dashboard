import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { contactData } from "../../../fakeDatas/mock";
import { Box, useTheme } from "@mui/material";
import Header from "../../../shared/Header";
import { colorShades } from "../../../mui/theme";

const Contact = () => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);

   const columns = [
      { field: "id", headerName: "ID" },
      {
         field: "fullName",
         flex: 1,
         headerName: "Name",
         description: "this column is not sortable",
         sortable: false,
         valueGetter: (params) =>
            `${params.row["first_name"] || ""} ${params.row["last_name"] || ""}`,
      },
      {
         field: "email",
         headerName: "Email",
         editable: "true",
         flex: 1,
      },

      {
         field: "addres",
         headerName: "Adress",
         flex: 1,
      },
      {
         field: "city",
         headerName: "City",
      },
   ];
   return (
      <Box maxWidth="100%">
         <Header
            title="Contact"
            subtitle="Here you can manage your contacts for feature refrences"
         />
         <Box
            width="100%"
            px={5}
            mb={5}
            sx={{
               "& .MuiDataGrid-columnHeaders , .MuiDataGrid-footerContainer": {
                  background: colors.primary[700],
               },
               "& .MuiDataGrid-toolbarContainer": {
                  my: 1,
               },
            }}
         >
            <Box display="flex" justifyContent="center" alignItems="center">
               <DataGrid
                  sx={{ maxWidth: "70vw" }}
                  columns={columns}
                  checkboxSelection
                  rows={contactData}
                  slots={{ toolbar: GridToolbar }}
               />
            </Box>
         </Box>
      </Box>
   );
};

export default Contact;
