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
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BluetoothConnected } from "@mui/icons-material";

interface DataTableProps {
  rows: any[];
  onEditClick: (row: any) => void;
  onDeleteClick: (no: number) => void;
  onViewClick: (row: any) => void;
}

const DataTable = ({
  rows,
  onEditClick,
  onDeleteClick,
  onViewClick,
}: DataTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Mentee's Name</TableCell>
            <TableCell>Bonus Type</TableCell>
            <TableCell>Scholarship Name</TableCell>
            <TableCell>University Destination</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.no}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.menteeName}</TableCell>
              <TableCell>{row.bonusType}</TableCell>
              <TableCell>{row.scholarshipName}</TableCell>
              <TableCell>{row.universityDestination}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
              <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                <IconButton
                  style={{
                    backgroundColor: "#0B3B5A",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <VisibilityIcon onClick={() => onViewClick(row)} />
                </IconButton>
                <IconButton
                  style={{
                    backgroundColor: "#1976D2",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <EditIcon onClick={() => onEditClick(row)} />
                </IconButton>
                <IconButton
                  style={{
                    backgroundColor: "#D32F2F",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <DeleteIcon onClick={() => onDeleteClick(row.no)} />
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

// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// interface DataTableProps {
//   rows: any[];
//   onEditClick: (row: any) => void;
//   onDeleteClick: (no: number) => void;
// }

// const DataTable = ({ rows, onEditClick, onDeleteClick }: DataTableProps) => {
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
//                 <IconButton onClick={() => onEditClick(row)}>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton>
//                   <VisibilityIcon />
//                 </IconButton>
//                 <IconButton onClick={() => onDeleteClick(row.no)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default DataTable;
