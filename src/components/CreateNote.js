import * as React from 'react';
import BrushIcon from '@mui/icons-material/Brush';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { addNotes } from "../Services/NoteServices";
import Button from "@mui/material/Button";
import { useState } from 'react';
import './CreateNote.css'
// import '../components/CreateNote.css'


export default function BasicTextFields({ onNoteAdded }){

    
    const noteObj = {

        "title": "",
        "description": "",
        "isPined": false,
        "isArchived": false,
        "isDeleted": false,
        "color": "#ffffff"
    }
    const handleCreateNote = () => {
        addNotes(noteObj);

        onNoteAdded(); // Notify the parent component that a new note has been added
      };

   
   

  return(
    // <div className='nt-mainbox'>
    //   <div className='nt-text'>
    //     take a note...
    //   </div>
    //   <div className='nt-mainbox-iconbar'>
    //     <div className='nt-text-icon'>
    //       <IconButton>
    //         <CheckBoxIcon/>
    //       </IconButton>
          
    //     </div>
    //     <div className='nt-text-icon'>
    //       <IconButton><BrushIcon/></IconButton>
    //     </div>
    //     <div className='nt-text-icon'>
    //       <IconButton>
    //         <InsertPhotoIcon></InsertPhotoIcon>
    //       </IconButton>
    //     </div>
    //   </div>

    // </div>

    <>
    <div className='topper'>
                        <div >
                            <input class="input" type="text" placeholder="Title" style={{ border: '0px solid #ccc', outline: 'none' }} onChange={(e) => { noteObj.title = e.target.value }} />
                        </div>
                        <div>
                            <input class="outside" type="text" placeholder="Take a note..." style={{ border: '0px solid #ccc', outline: 'none' }} onChange={(e) => { noteObj.description = e.target.value }} />
                        </div>
                        <div className='rod' >
                            <NotificationsOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorLensOutlinedIcon  />
                            <ImageOutlinedIcon />
                            <ArchiveOutlinedIcon />
                            <MoreVertOutlinedIcon />
                            <UndoOutlinedIcon />
                            <RedoOutlinedIcon />
                            <Button onClick={handleCreateNote}>Close</Button>
                            </div>
                            </div>
                            </>
)
}