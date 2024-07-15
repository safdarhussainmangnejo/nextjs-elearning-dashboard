import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import Dropdown from '../custom/Dropdown'; // Import the Dropdown component
import CustomButton from '../custom/CustomButton'; // Import the CustomButton component
import { FORMMODE } from '@/app/utils/constants';

interface ModalFormProps {
  open: boolean;
  mode: number;
  onClose: () => void;
  formData: any;
  onFormChange: (field: string, value: any) => void;
  onSave: () => void;
}

const ModalForm = ({ open, onClose, formData, onFormChange, onSave, mode }: ModalFormProps) => {
  const isEdit = mode == FORMMODE.Edit
  const isView = mode == FORMMODE.View
  const isDisabled = mode == FORMMODE.View
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: 600,
          height: '100%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          overflow: 'auto',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5">Edit Bonus</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Card variant="outlined" sx={{ mb: 2 }}>
           <CardContent>
            <Typography variant="h6">Edit Bonus</Typography>
             <Divider sx={{ my: 2 }} />
             
             <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
              <Grid item xs={12} md={3}>
                 <Typography variant="body2" color="textSecondary">
                   Mentor's Name
                 </Typography>
               </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">{formData.mentorName}</Typography>
              </Grid>
             </Grid>

             <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
               <Grid item xs={12} md={3}>
               <Typography variant="body2" color="textSecondary">
               Date of Filing
             </Typography>
               </Grid>
               <Grid item xs={12} md={6}>
               <Typography variant="body1">{formData.dateOfFiling}</Typography>
               </Grid>
             </Grid>

           </CardContent>
        </Card>

        <TextField
          label="Mentee's Name"
          fullWidth
          margin="normal"
          value={formData.menteeName}
          onChange={(e) => onFormChange('menteeName', e.target.value)}
          disabled={isDisabled}
        />
        <Dropdown
          label="Bonus Type"
          options={['LoA Unconditional', 'Fully Funded']}
          value={formData.bonusType}
          onChange={(value) => onFormChange('bonusType', value)}
          disabled={isDisabled}
        />
        <TextField
          label="Scholarship Name"
          fullWidth
          margin="normal"
          value={formData.scholarshipName}
          onChange={(e) => onFormChange('scholarshipName', e.target.value)}
          disabled={isDisabled}
        />
        <TextField
          label="University Destination"
          fullWidth
          margin="normal"
          value={formData.universityDestination}
          onChange={(e) => onFormChange('universityDestination', e.target.value)}
          disabled={isDisabled}
        />
        <Dropdown
          label="Start Year"
          options={['2022', '2023', '2024']}
          value={formData.startYear}
          onChange={(value) => onFormChange('startYear', value)}
          disabled={isDisabled}
        />
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Attachments</Typography>
            <Divider sx={{ my: 2 }} />
            {formData.attachments.map((attachment: any, index: number) => (
              <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography>{attachment.name}</Typography>
                <Box>
                  <IconButton>
                    <FileDownloadIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
        {isEdit &&
        <Box display="flex" justifyContent="space-between" mt={3}>
          <CustomButton variantType="outlined" onClick={onClose}>
            Cancel
          </CustomButton>
          <CustomButton variantType="filled" color="primary" onClick={onSave}>
            Save
          </CustomButton>
        </Box>
        }
      </Box>
    </Modal>
  );
};

export default ModalForm;

// import React from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Divider,
//   Grid,
//   IconButton,
//   Modal,
//   TextField,
//   Typography,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { DatePicker } from "@mui/x-date-pickers";
// import Dropdown from "../custom/Dropdown"; // Import the Dropdown component
// import CustomButton from "./CustomButton";

// interface ModalFormProps {
//   open: boolean;
//   onClose: () => void;
//   formData: any;
//   onFormChange: (field: string, value: any) => void;
//   onSave: () => void;
// }

// const ModalForm = ({
//   open,
//   onClose,
//   formData,
//   onFormChange,
//   onSave
// }: ModalFormProps) => {
//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box
//         sx={{
//           position: "fixed",
//           top: 0,
//           right: 0,
//           width: "100%",
//           maxWidth: 600,
//           height: "100%",
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           p: 4,
//           overflow: "auto",
//         }}
//       >
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           mb={2}
//         >
//           <Typography variant="h5">Edit Bonus</Typography>
//           <IconButton onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//         <Card variant="outlined" sx={{ mb: 2 }}>
//           <CardContent>
//             <Typography variant="h6">Edit Bonus</Typography>
//             <Divider sx={{ my: 2 }} />
//             <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
//               <Grid item xs={12} md={3}>
//                 <Typography variant="body2" color="textSecondary">
//                   Mentor's Name
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography variant="body1">{formData.mentorName}</Typography>
//               </Grid>
//             </Grid>

//             <Grid container spacing={3} alignItems="center" sx={{ mb: 1 }}>
//               <Grid item xs={12} md={3}>
//               <Typography variant="body2" color="textSecondary">
//               Date of Filing
//             </Typography>
//               </Grid>
//               <Grid item xs={12} md={6}>
//               <Typography variant="body1">{formData.dateOfFiling}</Typography>
//               </Grid>
//             </Grid>

//           </CardContent>
//         </Card>
//         <TextField
//           label="Mentee's Name"
//           fullWidth
//           margin="normal"
//           value={formData.menteeName}
//           onChange={(e) => onFormChange("menteeName", e.target.value)}
//         />
//         <Dropdown
//           label="Bonus Type"
//           options={["LoA Unconditional", "Fully Funded"]}
//           value={formData.bonusType}
//           onChange={(value) => onFormChange("bonusType", value)}
//         />
//         <TextField
//           label="Scholarship Name"
//           fullWidth
//           margin="normal"
//           value={formData.scholarshipName}
//           onChange={(e) => onFormChange("scholarshipName", e.target.value)}
//         />
//         <TextField
//           label="University Destination"
//           fullWidth
//           margin="normal"
//           value={formData.universityDestination}
//           onChange={(e) =>
//             onFormChange("universityDestination", e.target.value)
//           }
//         />
//         <Dropdown
//           label="Start Year"
//           options={["2022", "2023", "2024"]}
//           value={formData.startYear}
//           onChange={(value) => onFormChange("startYear", value)}
//         />
//         <Card variant="outlined" sx={{ mt: 2 }}>
//           <CardContent>
//             <Typography variant="h6">Attachments</Typography>
//             <Divider sx={{ my: 2 }} />
//             {formData.attachments.map((attachment: any, index: number) => (
//               <Box
//                 key={index}
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 mb={1}
//               >
//                 <Typography>{attachment.name}</Typography>
//                 <Box>
//                   <IconButton>
//                     <FileDownloadIcon />
//                   </IconButton>
//                   <IconButton>
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               </Box>
//             ))}
//           </CardContent>
//         </Card>

//         <Box display="flex" justifyContent="space-between" mt={3}>
//           <CustomButton variantType="outlined" onClick={onClose}>
//             Cancel
//           </CustomButton>
//           <CustomButton variantType="filled" color="primary">
//             Save
//           </CustomButton>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default ModalForm;
