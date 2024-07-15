"use client";
import { Grid, Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import DateRangePicker from "../custom/DateRangePicker";
import Dropdown from "../custom/Dropdown";
import SearchBar from "../custom/SearchBar";
import DataTable from "../custom/DataTable";
import ModalForm from "../custom/ModalForm";
import { FORMMODE } from "@/app/utils/constants";

const initialRows = [
  {
    no: 1,
    date: "03 Mar 2023",
    menteeName: "Nama User",
    bonusType: "LoA Unconditional",
    scholarshipName: "03 Mar 2023",
    universityDestination: "MIT",
    status: "Diterima",
    mentorName: "Nama User",
    dateOfFiling: "23 October 2023",
    startYear: "2023",
    attachments: [{ name: "Payslips_20 Aug.pdf" }],
  },
  {
    no: 2,
    date: "03 Mar 2023",
    menteeName: "Safdar",
    bonusType: "LoA Unconditional",
    scholarshipName: "03 Mar 2023",
    universityDestination: "Oxford",
    status: "Diterima",
    mentorName: "Safdar",
    dateOfFiling: "23 October 2023",
    startYear: "2023",
    attachments: [{ name: "Payslips_20 Aug.pdf" }],
  },
  // Add more rows as needed
];

const BonusMentor = () => {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [rows, setRows] = useState(initialRows);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [mode, setMode] = useState(FORMMODE.Disabled)

  const handleEditClick = (row: any) => {
    setMode(FORMMODE.Edit)
    setSelectedRow(row);
    setModalOpen(true);
  };

  const handleViewClick = (row: any) => {
    setMode(FORMMODE.View)
    setSelectedRow(row);
    setModalOpen(true);
  };

  const handleFormChange = (field: string, value: any) => {
    setSelectedRow({ ...selectedRow, [field]: value });
  };

  const handleSave = () => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.no === selectedRow.no ? selectedRow : row))
    );
    setModalOpen(false);
    setMode(FORMMODE.Disabled)
  };

  const handleDelete = (no: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.no !== no));
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Mentor
        </Typography>
        <Grid container spacing={3} alignItems="center" sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Bonus Mentor
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            
          </Grid>
          <Grid item xs={12} md={4}>
            <SearchBar value={search} onChange={setSearch} />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4} mt={-1}>
            <DateRangePicker />
          </Grid>
          <Grid item xs={12} md={4}>
            <Dropdown
              label="All Type"
              options={["All Type", "LoA Unconditional", "Fully Funded"]}
              value={type}
              onChange={setType}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Dropdown
              label="All Status"
              options={["All Status", "Diterima", "Diproses", "Ditolak"]}
              value={status}
              onChange={setStatus}
            />
          </Grid>
        </Grid>
        <Box mt={3}>
          <DataTable
            rows={rows}
            onEditClick={handleEditClick}
            onDeleteClick={handleDelete}
            onViewClick={handleViewClick}
          />
        </Box>
        {selectedRow && (
          <ModalForm
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            formData={selectedRow}
            onFormChange={handleFormChange}
            onSave={handleSave}
            mode={mode}
          />
        )}
      </Box>
    </Container>
  );
};

export default BonusMentor;

// 'use client'
// import { Grid, Box, Typography, Container } from '@mui/material';
// import { useState } from 'react';
// import DateRangePicker from '../custom/DateRangePicker';
// import Dropdown from '../custom/Dropdown';
// import SearchBar from '../custom/SearchBar';
// import DataTable from '../custom/DataTable';
// import ModalForm from '../custom/ModalForm';
// const initialRows = [
//   {
//     no: 1,
//     date: '03 Mar 2023',
//     menteeName: 'Nama User',
//     bonusType: 'LoA Unconditional',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'MIT',
//     status: 'Diterima',
//     mentorName: 'Nama User',
//     dateOfFiling: '23 October 2023',
//     startYear: '2023',
//     attachments: [{ name: 'Payslips_20 Aug.pdf' }],
//   },
//   {
//     no: 2,
//     date: '03 Mar 2023',
//     menteeName: 'Safdar',
//     bonusType: 'LoA Unconditional',
//     scholarshipName: '03 Mar 2023',
//     universityDestination: 'Oxford',
//     status: 'Diterima',
//     mentorName: 'Safdar',
//     dateOfFiling: '23 October 2023',
//     startYear: '2023',
//     attachments: [{ name: 'Payslips_20 Aug.pdf' }],
//   },
// ];

// const BonusMentor = () => {

//   const [search, setSearch] = useState('');
//   const [dateRange, setDateRange] = useState('');
//   const [type, setType] = useState('');
//   const [status, setStatus] = useState('');
//   const [rows, setRows] = useState(initialRows);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState<any>(null);

//   const handleEditClick = (row: any) => {
//     setSelectedRow(row);
//     setModalOpen(true);
//   };

//   const handleFormChange = (field: string, value: any) => {
//     setSelectedRow({ ...selectedRow, [field]: value });
//   };

//   const handleSave = () => {

//     setRows((prevRows) =>
//       prevRows.map((row) => (row.no === selectedRow.no ? selectedRow : row))
//     );
//     setModalOpen(false);
//   };

//   const handleDelete = (no: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.no !== no));
//   };

//   return (
//     <Container>
//       <Box sx={{ flexGrow: 1, p: 3 }}>
//         <Typography variant="h4" gutterBottom>
//           Mentor
//         </Typography>

//         <Grid container spacing={3} alignItems="center" sx={{ mb: 3 }}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h5" gutterBottom>
//               Bonus Mentor
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <SearchBar value={search} onChange={setSearch} />
//           </Grid>
//         </Grid>

//         <Grid container spacing={3} alignItems="center">
//           <Grid item xs={12} md={4}>
//             <DateRangePicker />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Dropdown
//               label="All Type"
//               options={['All Type', 'LoA Unconditional', 'Fully Funded']}
//               value={type}
//               onChange={setType}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Dropdown
//               label="All Status"
//               options={['All Status', 'Diterima', 'Diproses', 'Ditolak']}
//               value={status}
//               onChange={setStatus}
//             />
//           </Grid>
//         </Grid>
//         <Box mt={3}>
//           <DataTable
//             rows={rows}
//             onEditClick={handleEditClick}
//             onDeleteClick={handleDelete}
//           />
//         </Box>
//         {selectedRow && (
//           <ModalForm
//             open={modalOpen}
//             onClose={() => setModalOpen(false)}
//             formData={selectedRow}
//             onFormChange={handleFormChange}
//             onSave={handleSave}
//           />
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default BonusMentor;
