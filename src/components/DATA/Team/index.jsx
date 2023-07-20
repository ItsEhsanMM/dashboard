import { Box, useTheme } from "@mui/material";
import Header from "../../../shared/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TeamData } from "../../../fakeDatas/mock";
import { colorShades } from "../../../mui/theme";

const Team = () => {
   const theme = useTheme();
   const colors = colorShades(theme.palette.mode);

   const columns = [
      { field: "id", headerName: "ID" },
      { field: "first_name", flex: 0.5, headerName: "First Name", editable: true },
      {
         field: "last_name",
         headerName: "Last Name",
         editable: true,
         flex: 0.5,
      },
      {
         field: "email",
         headerName: "Email",
         editable: "true",
         flex: 1,
      },
      { field: "gender", headerName: "Gender", editable: "true" },
      {
         field: "number",
         headerName: "Phone number",
         editable: true,
         type: "number",
         align: "left",
         headerAlign: "left",
         flex: 0.5,
      },
      {
         field: "fullName",
         flex: 1,
         headerName: "Full Name",
         description: "this column is not sortable",
         sortable: false,
         valueGetter: (params) =>
            `${params.row["first_name"] || ""} ${params.row["last_name"] || ""}`,
      },
   ];
   return (
      <Box maxWidth="100%">
         <Header title="manage Team" subtitle="Here you can manage your team" />
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
                  rows={TeamData}
                  slots={{ toolbar: GridToolbar }}
               />
            </Box>
         </Box>
      </Box>
   );
};

export default Team;
