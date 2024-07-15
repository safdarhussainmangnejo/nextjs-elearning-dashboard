'use client'
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const DrawerList: React.FC = () => {
  return (
    <div>
      <Divider />
      <List>
        {['Schedule', 'Mentor', 'Tutor', 'Setting'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <ScheduleIcon /> : index === 1 ? <PersonIcon /> : index === 2 ? <PersonIcon /> : <SettingsIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerList;
