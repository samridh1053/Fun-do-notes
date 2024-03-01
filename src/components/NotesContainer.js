import BasicCard from "./NoteCard";
import BasicTextFields from "../components/CreateNote";
import { useEffect, useState } from "react";
import { getNotes } from "../Services/NoteServices";

function NoteContainer() {
  const [noteList, setNoteList] = useState([]);

  async function getNote() {
    const notes = await getNotes();
    setNoteList(notes);
  }

  const handleNoteAdded = () => {
    getNote(); // Fetch the updated notes when a new note is added
  };

  useEffect(() => {
    getNote();
  }, []);

  return (
    <div>
      <BasicTextFields onNoteAdded={handleNoteAdded}  />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center", overflow: "hidden",marginTop:"200px" }}>
        {noteList.length ? noteList?.map(ele => <BasicCard noteObj={ele} />) : <span>Loading....</span>}
      </div>
    </div>
  );
}

export default NoteContainer;
