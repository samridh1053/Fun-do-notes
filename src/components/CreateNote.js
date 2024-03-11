import * as React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import Button from "@mui/material/Button";
import { addNotes } from "../Services/NoteServices";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./CreateNote.css";
// import '../components/CreateNote.css'

export default function BasicTextFields({ onNoteAdded }) {
  const [clickedNote, setClickedNote] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState(null);
  // const [color, setColor] = useState("#FFFFFF");
  const noteObj = {
    title: "",
    description: "",
    isPined: false,
    isArchived: false,
    isDeleted: false,
    color: "#FFFFFF",
  };
  const handleClickNote = () => {
    clickedNote ? setClickedNote(false) : setClickedNote(true);
    console.log(clickedNote);
  };
  const handleCreateNote = () => {
    handleClickNote();
    addNotes(noteObj);
    onNoteAdded(); // Notify the parent component that a new note has been added
  };

  const open2 = Boolean(anchorEl2);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClose3 = (action) => {
    noteObj.color = `${action}`;
    // setColor(`${action}`);
    console.log(action);
  };

  return (
    <>
      {!clickedNote ? (
        <div className="nt-mainbox">
          <div>
            <input
              class="nt-text"
              onClick={handleClickNote}
              type="text"
              placeholder="Take a note..."
              style={{ border: "0px solid #ccc", outline: "none" }}
            />
          </div>
          <div className="nt-mainbox-iconbar">
            <div className="nt-text-icon">
              <IconButton>
                <CheckBoxIcon />
              </IconButton>
            </div>
            <div className="nt-text-icon">
              <IconButton>
                <BrushIcon />
              </IconButton>
            </div>
            <div className="nt-text-icon">
              <IconButton>
                <InsertPhotoIcon></InsertPhotoIcon>
              </IconButton>
            </div>
          </div>
        </div>
      ) : (
        <div className="topper">
          <div>
            <input
              class="input"
              type="text"
              placeholder="Title"
              style={{ border: "0px solid #ccc", outline: "none" }}
              onChange={(e) => {
                noteObj.title = e.target.value;
              }}
            />
          </div>
          <div>
            <input
              class="outside"
              type="text"
              placeholder="Take a note..."
              style={{ border: "0px solid #ccc", outline: "none" }}
              onChange={(e) => {
                noteObj.description = e.target.value;
              }}
            />
          </div>
          <div className="rod">
            <NotificationsOutlinedIcon />
            <PersonAddAltOutlinedIcon />
            <button
              style={{ border: "none", background: "none" }}
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
            >
              <ColorLensOutlinedIcon />
            </button>
            <Menu
              id="basic-menu2"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button1",
              }}
            >
              <MenuItem onClick={handleClose2}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#FAAFA8",
                  }}
                  onClick={() => handleClose3("#FAAFA8")}
                ></div>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#F39F76",
                  }}
                  onClick={() => handleClose3("#F39F76")}
                ></div>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#FFF8B8",
                  }}
                  onClick={() => handleClose3("#FFF8B8")}
                ></div>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#E2F6D3",
                  }}
                  onClick={() => handleClose3("#E2F6D3")}
                ></div>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#B4DDD3",
                  }}
                  onClick={() => handleClose3("#B4DDD3")}
                ></div>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#D4E4ED",
                  }}
                  onClick={() => handleClose3("#D4E4ED")}
                ></div>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#AECCDC",
                  }}
                  onClick={() => handleClose3("#AECCDC")}
                ></div>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#D3BFDB",
                  }}
                  onClick={() => handleClose3("#D3BFDB")}
                ></div>
              </MenuItem>
            </Menu>
            <ImageOutlinedIcon />
            <ArchiveOutlinedIcon />
            <MoreVertOutlinedIcon />
            <UndoOutlinedIcon />
            <RedoOutlinedIcon />
            <Button onClick={handleCreateNote}>Close</Button>
          </div>
        </div>
      )}
    </>
  );
}
