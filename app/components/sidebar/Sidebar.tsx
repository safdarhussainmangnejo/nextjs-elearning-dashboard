'use client'
import React, { useState, useEffect } from 'react';
import { Drawer, List, Box, ListItem, ListItemIcon, ListItemText, Collapse, Toolbar, Avatar, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, AccessTimeRounded, InboxRounded, DataUsageRounded, StorageRounded, DriveFolderUploadRounded } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const theme = useTheme();
  const [openSchedule, setOpenSchedule] = useState(false);
  const [openMentor, setOpenMentor] = useState(false);
  const [openTutor, setOpenTutor] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  console.log("router: ", router)
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (menu: string) => {
    switch (menu) {
      case 'schedule':
        setOpenSchedule(!openSchedule);
        break;
      case 'mentor':
        setOpenMentor(!openMentor);
        break;
      case 'tutor':
        setOpenTutor(!openTutor);
        break;
      case 'settings':
        setOpenSettings(!openSettings);
        break;
      default:
        break;
    }
  };

  const isActive = (href: string) => mounted && router.pathname === href;

  if (!mounted) return null;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary },
      }}
    >
      <Toolbar />
      <List>
        <ListItem sx={{ pl: 4 }}>
          <Avatar src="/images/profile.png" />
          <Box ml={2}>
            <Typography variant="h6" sx={{fontSize:'14px', fontFamily:'Open Sans', fontWeight:'bold'}}>Syarifah Nurbaity</Typography>
            <Typography variant="body2" color="textSecondary">Operational</Typography>
          </Box>
        </ListItem>

        <Divider sx={{ margin: '20px 16px' }} />

        <ListItem button component={Link} href="/" sx={{ pl: 4, color: isActive('/') ? 'primary.main' : 'inherit' }}>
          <ListItemIcon sx={{ color: isActive('/') ? 'primary.main' : 'inherit' }}><InboxRounded /></ListItemIcon>
          <ListItemText primary="Home" sx={{ fontWeight: isActive('/') ? 'bold' : 'normal' }} />
        </ListItem>

        <ListItem button onClick={() => handleClick('schedule')} sx={{ pl: 4 }}>
          <ListItemText primary="Schedule" />
          {openSchedule ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSchedule} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><DriveFolderUploadRounded /></ListItemIcon>
              <ListItemText primary="Request Schedule" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><AccessTimeRounded /></ListItemIcon>
              <ListItemText primary="Schedule Tutor" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><AccessTimeRounded /></ListItemIcon>
              <ListItemText primary="Schedule Mentor" />
            </ListItem>
          </List>
        </Collapse>

        <Divider sx={{ margin: '20px 16px' }} />

        <ListItem button onClick={() => handleClick('mentor')} sx={{ pl: 4 }}>
          <ListItemText primary="Dashboards Mentor" />
          {openMentor ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMentor} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} href="/bonus-mentor" sx={{ pl: 4, color: isActive('/bonus-mentor') ? 'primary.main' : 'inherit' }}>
              <ListItemIcon sx={{ color: isActive('/bonus-mentor') ? 'primary.main' : 'inherit' }}><DriveFolderUploadRounded /></ListItemIcon>
              <ListItemText primary="Bonus Mentor" sx={{ fontWeight: isActive('/bonus-mentor') ? 'bold' : 'normal' }} />
            </ListItem>
            <ListItem button component={Link} href="/daftar-hadir" sx={{ pl: 4, color: isActive('/daftar-hadir') ? 'primary.main' : 'inherit' }}>
              <ListItemIcon sx={{ color: isActive('/daftar-hadir') ? 'primary.main' : 'inherit' }}><DataUsageRounded /></ListItemIcon>
              <ListItemText primary="Daftar Hadir" sx={{ fontWeight: isActive('/daftar-hadir') ? 'bold' : 'normal' }} />
            </ListItem>
            {/* <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><DataUsageRounded /></ListItemIcon>
              <ListItemText primary="Daftar Hadir" />
            </ListItem> */}
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><AccessTimeRounded /></ListItemIcon>
              <ListItemText primary="Evaluasi Mentor" />
            </ListItem>
          </List>
        </Collapse>

        <Divider sx={{ margin: '20px 16px' }} />

        <ListItem button onClick={() => handleClick('tutor')} sx={{ pl: 4 }}>
          <ListItemText primary="Dashboards Tutor" />
          {openTutor ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTutor} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} href="/daftar-hadir" sx={{ pl: 4, color: isActive('/daftar-hadir') ? 'primary.main' : 'inherit' }}>
              <ListItemIcon sx={{ color: isActive('/daftar-hadir') ? 'primary.main' : 'inherit' }}><InboxRounded /></ListItemIcon>
              <ListItemText primary="Presensi" sx={{ fontWeight: isActive('/daftar-hadir') ? 'bold' : 'normal' }} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><AccessTimeRounded /></ListItemIcon>
              <ListItemText primary="Evaluasi Tutor" />
            </ListItem>
          </List>
        </Collapse>

        <Divider sx={{ margin: '20px 16px' }} />

        <ListItem button onClick={() => handleClick('settings')} sx={{ pl: 4 }}>
          <ListItemText primary="Settings" />
          {openSettings ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><InboxRounded /></ListItemIcon>
              <ListItemText primary="Student Account" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><DriveFolderUploadRounded /></ListItemIcon>
              <ListItemText primary="Session and Package Data" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><DriveFolderUploadRounded /></ListItemIcon>
              <ListItemText primary="Class Data" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon><StorageRounded /></ListItemIcon>
              <ListItemText primary="Database" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;


// 'use client'
// import React, { useState } from 'react';
// import { Drawer, List, Box, ListItem, ListItemIcon, ListItemText, Collapse, Toolbar, Avatar, Typography } from '@mui/material';
// import { Home, ExpandLess, ExpandMore, Schedule, SupervisorAccount, AccessTimeRounded, InboxRounded, DataUsageRounded, StorageRounded, Settings, DriveFolderUploadRounded, AccountCircle, Layers } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';
// import { Divider } from '@mui/material';

// import Link from 'next/link';

// const Sidebar = () => {
//   const theme = useTheme();
//   const [openSchedule, setOpenSchedule] = useState(false);
//   const [openMentor, setOpenMentor] = useState(false);
//   const [openTutor, setOpenTutor] = useState(false);
//   const [openSettings, setOpenSettings] = useState(false);

//   const handleClick = (menu: string) => {
//     switch (menu) {
//       case 'schedule':
//         setOpenSchedule(!openSchedule);
//         break;
//       case 'mentor':
//         setOpenMentor(!openMentor);
//         break;
//       case 'tutor':
//         setOpenTutor(!openTutor);
//         break;
//       case 'settings':
//         setOpenSettings(!openSettings);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary },
//       }}
//     >
//       <Toolbar />
//       <List>
//         <ListItem sx={{ pl: 4 }}>
//           <Avatar src="/images/profile.png" />
//           <Box ml={2}>
//             <Typography variant="h6" sx={{fontSize:'14px', fontFamily:'Open Sans', fontWeight:'bold'}}>Syarifah Nurbaity</Typography>
//             <Typography variant="body2" color="textSecondary">Operational</Typography>
//           </Box>
//         </ListItem>

//         <Divider sx={{ margin: '20px 16px' }} />

//         <ListItem button component={Link} href="/" sx={{ pl: 4 }}>
//           <ListItemIcon><InboxRounded /></ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItem>


//         <ListItem button onClick={() => handleClick('schedule')} sx={{ pl: 4 }}>
//           <ListItemText primary="Schedule" />
//           {openSchedule ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openSchedule} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button sx={{ pl: 4 }}>
//                 <ListItemIcon><DriveFolderUploadRounded /></ListItemIcon>
//               <ListItemText primary="Request Schedule" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//                 <ListItemIcon><AccessTimeRounded /></ListItemIcon>
//               <ListItemText primary="Schedule Tutor" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><AccessTimeRounded /></ListItemIcon>
//               <ListItemText primary="Schedule Mentor" />
//             </ListItem>
//           </List>
//         </Collapse>

//         <Divider sx={{ margin: '20px 16px' }} />

//         <ListItem button onClick={() => handleClick('mentor')} sx={{ pl: 4 }}>
//           <ListItemText primary="Dashboards Mentor" />
//           {openMentor ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openMentor} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><DriveFolderUploadRounded /></ListItemIcon>
//               <ListItemText primary="Bonus Mentor" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><DataUsageRounded /></ListItemIcon>
//               <ListItemText primary="Daftar Hadir" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><AccessTimeRounded /></ListItemIcon>
//               <ListItemText primary="Evaluasi Mentor" />
//             </ListItem>
//           </List>
//         </Collapse>

//         <Divider sx={{ margin: '20px 16px' }} />

//         <ListItem button onClick={() => handleClick('tutor')} sx={{ pl: 4 }}>
//           <ListItemText primary="Dashboards Tutor" />
//           {openTutor ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openTutor} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><InboxRounded /></ListItemIcon>
//               <ListItemText primary="Presensi" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><AccessTimeRounded /></ListItemIcon>
//               <ListItemText primary="Evaluasi Tutor" />
//             </ListItem>
//           </List>
//         </Collapse>

//         <Divider sx={{ margin: '20px 16px' }} />

//         <ListItem button onClick={() => handleClick('settings')} sx={{ pl: 4 }}>
//           <ListItemText primary="Settings" />
//           {openSettings ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openSettings} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><InboxRounded /></ListItemIcon>
//               <ListItemText primary="Student Account" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><DriveFolderUploadRounded /></ListItemIcon>
//               <ListItemText primary="Session and Package Data" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><DriveFolderUploadRounded /></ListItemIcon>
//               <ListItemText primary="Class Data" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }}>
//             <ListItemIcon><StorageRounded /></ListItemIcon>
//               <ListItemText primary="Database" />
//             </ListItem>
//           </List>
//         </Collapse>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;