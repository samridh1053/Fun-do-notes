import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { archiveNotes } from "../Services/NoteServices";
import { trashNotes, delForever } from "../Services/NoteServices";
import { List } from "@mui/material";
import "./NoteCard.css";

export default function BasicCard(props) {
  const { noteObj, onNoteArchived, onNoteDeleted, update, isGridView } = props;
  // console.log(noteObj);
  // const {notesObj,onNoteDeleted} =props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [id, setId] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onArchived = (id) => {
    setId(id);
    archiveNotes({
      noteIdList: [id],
      isArchived: true,
    });
    onNoteArchived(noteObj);
    // console.log(id);
  };

  const onDeleted = (id) => {
    setId(id);
    trashNotes({
      noteIdList: [id],
      isDeleted: true,
    });
    onNoteDeleted(noteObj);
    // console.log(id);
  };

  const unArchived = (id) => {
    setId(id);
    archiveNotes({
      noteIdList: [id],
      isArchived: false,
    });
    onNoteArchived(noteObj);
    window.location.reload();
    // console.log(id);
  };

  const unDeleted = (id) => {
    setId(id);
    trashNotes({
      noteIdList: [id],
      isDeleted: false,
    });
    onNoteDeleted(noteObj);
    window.location.reload();
    // console.log(id);
  };

  const deleteForever = (id) => {
    setId(id);
    delForever({
      noteIdList: [id],
    });
    onNoteDeleted(noteObj);
    window.location.reload();
    // console.log(id);
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
    update(noteObj);
  };

  return (
    <div className="pallet">
      {isGridView ? (
        <Card class="pal" style={{ backgroundColor: `${noteObj?.color}` }}>
          <div class="incontainer" style={{}}>
            <CardContent>
              <Typography variant="h6" component="div">
                {noteObj?.title}
              </Typography>
              <Typography>{noteObj?.description}</Typography>
            </CardContent>
            <CardActions class="CardActions">
              <Button id="basic-button0">
                <AddAlertIcon />
              </Button>

              <Button
                id="basic-button1"
                aria-controls={open2 ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClick2}
              >
                <ColorLensIcon />
              </Button>
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
                    class="colorPal"
                    style={{
                      backgroundColor: "#FAAFA8",
                    }}
                    onClick={() => handleClose3("#FAAFA8")}
                  ></div>
                  <div
                    class="colorPal"
                    style={{
                      backgroundColor: "#F39F76",
                    }}
                    onClick={() => handleClose3("#F39F76")}
                  ></div>
                  <div
                    class="colorPal"
                    style={{
                      backgroundColor: "#FFF8B8",
                    }}
                    onClick={() => handleClose3("#FFF8B8")}
                  ></div>
                  <div
                    class="colorPal"
                    style={{
                      backgroundColor: "#E2F6D3",
                    }}
                    onClick={() => handleClose3("#E2F6D3")}
                  ></div>
                  <div
                    class="colorPal"
                    style={{
                      backgroundColor: "#B4DDD3",
                    }}
                    onClick={() => handleClose3("#B4DDD3")}
                  ></div>
                  <div
                    class="colorPal"
                    style={{
                      backgroundColor: "#D4E4ED",
                    }}
                    onClick={() => handleClose3("#D4E4ED")}
                  ></div>
                  <div
                    class="colorPal"
                    style={{
                      backgroundColor: "#AECCDC",
                    }}
                    onClick={() => handleClose3("#AECCDC")}
                  ></div>
                  <div
                    class="colorPal"
                    style={{
                      backgroundColor: "#D3BFDB",
                    }}
                    onClick={() => handleClose3("#D3BFDB")}
                  ></div>
                </MenuItem>
              </Menu>

              <Button id="basic-button3">
                <EditIcon />
              </Button>

              {/* {console.log(noteObj)} */}
              {noteObj?.isArchived ? (
                <Button
                  id="basic-button5"
                  onClick={() => unArchived(noteObj.id)}
                >
                  <UnarchiveIcon />
                </Button>
              ) : (
                <Button
                  id="basic-button4"
                  onClick={() => onArchived(noteObj.id)}
                >
                  <ArchiveIcon />
                </Button>
              )}

              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {!noteObj?.isDeleted ? (
                  <MenuItem onClick={() => onDeleted(noteObj.id)}>
                    Delete note
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem onClick={() => deleteForever(noteObj.id)}>
                      Delete Forever
                    </MenuItem>
                    <MenuItem onClick={() => unDeleted(noteObj.id)}>
                      Undo Delete
                    </MenuItem>
                  </>
                )}
                {/* <MenuItem onClick={() => onDeleted(noteObj.id)}>
              Delete note
            </MenuItem>
            <MenuItem onClick={() => deleteForever(noteObj.id)}>
              Delete Forever
            </MenuItem>
            <MenuItem onClick={() => unDeleted(noteObj.id)}>
              Undo Delete
            </MenuItem> */}
              </Menu>
            </CardActions>
          </div>
        </Card>
      ) : (
        <Card class="pal2" sx={{ backgroundColor: noteObj.color }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {noteObj.title}
            </Typography>
            <Typography>{noteObj.description}</Typography>
          </CardContent>
          <CardActions class="CardActions">
            <Button id="basic-button0">
              <AddAlertIcon />
            </Button>

            <Button
              id="basic-button1"
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
            >
              <ColorLensIcon />
            </Button>
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

            <Button id="basic-button3">
              <EditIcon />
            </Button>

            {console.log(noteObj)}
            {noteObj?.isArchived ? (
              <Button id="basic-button5" onClick={() => unArchived(noteObj.id)}>
                <UnarchiveIcon />
              </Button>
            ) : (
              <Button id="basic-button4" onClick={() => onArchived(noteObj.id)}>
                <ArchiveIcon />
              </Button>
            )}
            {/* <Button id="basic-button4" onClick={() => onArchived(noteObj.id)}>
            <ArchiveIcon />
          </Button>
          <Button id="basic-button5" onClick={() => unArchived(noteObj.id)}>
            <UnarchiveIcon />
          </Button> */}

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {!noteObj?.isDeleted ? (
                <MenuItem onClick={() => onDeleted(noteObj.id)}>
                  Delete note
                </MenuItem>
              ) : (
                <>
                  <MenuItem onClick={() => deleteForever(noteObj.id)}>
                    Delete Forever
                  </MenuItem>
                  <MenuItem onClick={() => unDeleted(noteObj.id)}>
                    Undo Delete
                  </MenuItem>
                </>
              )}
              {/* <MenuItem onClick={() => onDeleted(noteObj.id)}>
              Delete note
            </MenuItem>
            <MenuItem onClick={() => deleteForever(noteObj.id)}>
              Delete Forever
            </MenuItem>
            <MenuItem onClick={() => unDeleted(noteObj.id)}>
              Undo Delete
            </MenuItem> */}
            </Menu>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
