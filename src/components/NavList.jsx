import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useActiveModule } from './ActiveModuleContext'; // Update the path accordingly

const NavList = () => {
  const { setModule } = useActiveModule();

  const navList = [
    { id: 1, name: 'Notes', icon: <Lightbulb />, href:"/dashboard"},
    { id: 2, name: 'Archives', icon: <Archive />, href:"/dashboard/archive"},
    { id: 3, name: 'Trash', icon: <Delete />,  href:"/dashboard/trash"},
  ];

  const handleModuleChange = (module) => {
    setModule(module);
  };

  return (
    <List>
      {navList.map((list) => (
        <ListItem button key={list.id} onClick={() => handleModuleChange(list.name.toLowerCase())}>
          <Link style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }} to={list.href}>
            <ListItemIcon style={{ alignItems: 'center' }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
