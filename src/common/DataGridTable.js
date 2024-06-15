// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   { field: "name", headerName: "Name", width: 120 },
//   {
//     field: "members",
//     headerName: "Members",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastModified",
//     headerName: "Last Modified",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "---",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
// ];

// const rows = [
//   { id: 1, name: "ddd", lastModified: "Snow", members: "Jon", age: "---" },
//   {
//     id: 2,
//     name: "ddd",
//     lastModified: "Lannister",
//     members: "Cersei",
//     age: "---",
//   },
//   {
//     id: 3,
//     name: "ddd",
//     lastModified: "Lannister",
//     members: "Jaime",
//     age: "---",
//   },
//   { id: 4, name: "ddd", lastModified: "Stark", members: "Arya", age: "---" },
//   {
//     id: 5,
//     name: "ddd",
//     lastModified: "Targaryen",
//     members: "Daenerys",
//     age: "---",
//   },
//   { id: 6, name: "ddd", lastModified: "Melisandre", members: null, age: "---" },
//   {
//     id: 7,
//     name: "ddd",
//     lastModified: "Clifford",
//     members: "Ferrara",
//     age: "---",
//   },
//   {
//     id: 8,
//     name: "ddd",
//     lastModified: "Frances",
//     members: "Rossini",
//     age: "---",
//   },
//   { id: 9, name: "ddd", lastModified: "Roxie", members: "Harvey", age: "---" },
// ];
// const DataGridTable = () => {
//   return (
// <Box sx={{ height: 400, width: "100%", maxWidth: "1200px" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// };

// export default DataGridTable;
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";

const DataGridTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell className="font-semibold">
              <Checkbox />
              Name
            </TableCell>
            <TableCell className="font-semibold">Members</TableCell>
            <TableCell className="font-semibold">Last Modified</TableCell>
            <TableCell className="font-semibold">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <Checkbox />
                {row.iconName}
                {row.name}
              </TableCell>
              <TableCell>{row.members}</TableCell>
              <TableCell>{row.lastModified}</TableCell>
              <TableCell>---</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataGridTable;
