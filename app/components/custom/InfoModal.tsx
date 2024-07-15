import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface OpsTeamRepairModalProps {
  open: boolean;
  onClose: () => void;
}

const OpsTeamRepairModal: React.FC<OpsTeamRepairModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Card sx={{ maxWidth: 600, width: "90%", p: 3, position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <CardContent>
            <Typography variant="h5" gutterBottom textAlign="center">
              Ops Team Repair
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EDEFFF",
                borderRadius: 1,
                p: 2,
                mb: 3,
              }}
            >
              <CheckCircleOutlineIcon color="primary" />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Repaired by Operational Name on October 23 2024, 14:00 WIB
              </Typography>
            </Box>
            <Typography variant="h6" gutterBottom>
              Before Repair
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <Box component="span" sx={{ fontWeight: "bold", mr: 10 }}>
                Bonus Type:
              </Box>
              LoA
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold", mr: 5 }}>
                Mentoring Month:
              </Box>
              September
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              After Repair
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <Box component="span" sx={{ fontWeight: "bold", mr: 10 }}>
                Bonus Type:
              </Box>
              LoA Unconditional
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold", mr: 5 }}>
                Mentoring Month:
              </Box>
              Oktober
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default OpsTeamRepairModal;
