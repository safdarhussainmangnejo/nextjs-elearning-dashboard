import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Badge,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ReactNode } from "react";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: any) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  rows: any[];
  onEditClick: (row: any) => void;
  onDeleteClick: (no: number) => void;
  onViewClick: (row: any) => void;
}

const DataTable = ({
  columns,
  rows,
  onEditClick,
  onDeleteClick,
  onViewClick,
}: DataTableProps) => {
  console.log("columns: ", columns)
  console.log("rows: ", rows)
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns && columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows && columns) && rows.map((row, index) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format ? column.format(value) : value}
                  </TableCell>
                );
              })}
              <TableCell>
                <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                  <IconButton
                    style={{
                      backgroundColor: "#0B3B5A",
                      color: "#fff",
                      width: "40px",
                      height: "40px",
                    }}
                    onClick={() => onViewClick(row)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    style={{
                      backgroundColor: "#1976D2",
                      color: "#fff",
                      width: "40px",
                      height: "40px",
                    }}
                    onClick={() => onEditClick(row)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    style={{
                      backgroundColor: "#D32F2F",
                      color: "#fff",
                      width: "40px",
                      height: "40px",
                    }}
                    onClick={() => onDeleteClick(row.no)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Box,
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { BluetoothConnected } from "@mui/icons-material";

// interface DataTableProps {
//   rows: any[];
//   onEditClick: (row: any) => void;
//   onDeleteClick: (no: number) => void;
//   onViewClick: (row: any) => void;
// }

// const DataTable = ({
//   rows,
//   onEditClick,
//   onDeleteClick,
//   onViewClick,
// }: DataTableProps) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>No</TableCell>
//             <TableCell>Date</TableCell>
//             <TableCell>Mentee's Name</TableCell>
//             <TableCell>Bonus Type</TableCell>
//             <TableCell>Scholarship Name</TableCell>
//             <TableCell>University Destination</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Detail</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell>{row.no}</TableCell>
//               <TableCell>{row.date}</TableCell>
//               <TableCell>{row.menteeName}</TableCell>
//               <TableCell>{row.bonusType}</TableCell>
//               <TableCell>{row.scholarshipName}</TableCell>
//               <TableCell>{row.universityDestination}</TableCell>
//               <TableCell>{row.status}</TableCell>
//               <TableCell>
//               <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
//                 <IconButton
//                   style={{
//                     backgroundColor: "#0B3B5A",
//                     color: "#fff",
//                     width: "40px",
//                     height: "40px",
//                   }}
//                 >
//                   <VisibilityIcon onClick={() => onViewClick(row)} />
//                 </IconButton>
//                 <IconButton
//                   style={{
//                     backgroundColor: "#1976D2",
//                     color: "#fff",
//                     width: "40px",
//                     height: "40px",
//                   }}
//                 >
//                   <EditIcon onClick={() => onEditClick(row)} />
//                 </IconButton>
//                 <IconButton
//                   style={{
//                     backgroundColor: "#D32F2F",
//                     color: "#fff",
//                     width: "40px",
//                     height: "40px",
//                   }}
//                 >
//                   <DeleteIcon onClick={() => onDeleteClick(row.no)} />
//                 </IconButton>
//                 </Box>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default DataTable;