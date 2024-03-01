import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import '../components/NoteCard.css'

export default function BasicCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };


  const { noteObj } = props
  return (
    <div className='pallet'>
    <Card sx={{Width: "240px", height:"210px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {noteObj.title}
        </Typography>
        <Typography>
          {noteObj.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button ><AddAlertIcon/></Button>

        <Button 
        // sx={{display:"flex", flexDirection:"row"}}
        id="basic-button1"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}><ColorLensIcon/>
        
        </Button>
        <Menu
        id="basic-menu2"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button1',
        }}
      >
        <MenuItem onClick={handleClose2}>Profile</MenuItem>
        <MenuItem onClick={handleClose2}>My account</MenuItem>
        <MenuItem onClick={handleClose2}>Logout</MenuItem>
      </Menu>

        <Button ><EditIcon/></Button>

        <Button ><ArchiveIcon/></Button>

        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Delete note</MenuItem>
        <MenuItem onClick={handleClose}>Add label</MenuItem>
        <MenuItem onClick={handleClose}>Add drawing</MenuItem>
        <MenuItem onClick={handleClose}>Make a copy</MenuItem>
        <MenuItem onClick={handleClose}>Show checkboxes</MenuItem>
        <MenuItem onClick={handleClose}>Version history</MenuItem>
      </Menu>
      </CardActions>
    </Card>
    </div>
  );
}
