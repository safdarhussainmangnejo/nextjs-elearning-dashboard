import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface DataTableProps {
  rows: any[];
  onEditClick: (row: any) => void;
  onDeleteClick: (no: number) => void;
}

const DataTable = ({ rows, onEditClick, onDeleteClick }: DataTableProps) => {
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
                <IconButton onClick={() => onEditClick(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() => onDeleteClick(row.no)}>
                  <DeleteIcon />
                </IconButton>
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

// const rows = [
//   {
//     no: 1,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'LoA Unconditional',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Diterima',
//   },
//   {
//     no: 2,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'LoA Unconditional',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Diproses',
//   },
//   {
//     no: 3,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'LoA Unconditional',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Diterima',
//   },
//   {
//     no: 4,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'LoA Unconditional',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Ditolak',
//   },
//   {
//     no: 5,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'Fully Funded',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Diterima',
//   },
//   {
//     no: 6,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'Fully Funded',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Diterima',
//   },
//   {
//     no: 7,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'Fully Funded',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Diterima',
//   },
//   {
//     no: 8,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'Fully Funded',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Diterima',
//   },
// ];

// const DataTable = () => {
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
//                 <IconButton><VisibilityIcon /></IconButton>
//                 <IconButton><EditIcon /></IconButton>
//                 <IconButton><DeleteIcon /></IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default DataTable;
