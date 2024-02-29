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
// import '../components/NoteCard.css'

export default function BasicCard(props) {
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
        <Button ><ColorLensIcon/></Button>
        <Button ><EditIcon/></Button>
        <Button ><ArchiveIcon/></Button>
        <Button ><MoreVertIcon/></Button>
      </CardActions>
    </Card>
    </div>
  );
}
