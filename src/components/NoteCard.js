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
import { archiveNotes } from '../Services/NoteServices';
// import '../components/NoteCard.css'

export default function BasicCard(props) {
  const { noteObj,onNoteArchived  } = props; // here we have define noteArchived 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [id, setId]= React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
  
    setAnchorEl(null);
  };

  const onArchived =(id) =>{
    setId(id);
    // trashNotes
    archiveNotes({
      "noteIdList":[id],
      "isArchived":true
      })
    console.log(id);
  }
  
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

// undo this if error came and delete line number 18
  // const { noteObj } = props
  return (
    <div className='pallet'>
    <Card sx={{Width: "240px", height:"150px" }}>
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
        // style={{display:"flex", flexDirection:"row"}}
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
        <MenuItem onClick={handleClose2}><div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:"#FAAFA8"}}></div></MenuItem>
        <MenuItem onClick={handleClose2}><div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:"#F39F76"}}></div></MenuItem>
        <MenuItem onClick={handleClose2}><div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:"#FFF8B8"}}></div></MenuItem>
        <MenuItem onClick={handleClose2}><div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:"#E2F6D3"}}></div></MenuItem>
        <MenuItem onClick={handleClose2}><div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:"#B4DDD3"}}></div></MenuItem>
        <MenuItem onClick={handleClose2}><div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:"#D4E4ED"}}></div></MenuItem>
        <MenuItem onClick={handleClose2}><div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:"#AECCDC"}}></div></MenuItem>
        <MenuItem onClick={handleClose2}><div style={{height:"20px", width:"20px", borderRadius:"50%", backgroundColor:"#D3BFDB"}}></div></MenuItem>
      </Menu>

        <Button ><EditIcon/></Button>

        <Button onClick={() => onArchived(noteObj.id)}><ArchiveIcon/></Button>

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
        <MenuItem onClick={()=>{noteObj.isDeleted=true;
        console.log(noteObj.isDeleted);}}>Delete note</MenuItem>
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
