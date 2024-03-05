import BasicCard from "./NoteCard";
import BasicTextFields from "../components/CreateNote";
import { archiveNotes } from "../Services/NoteServices";
import { useEffect, useState } from "react";
import { getNotes } from "../Services/NoteServices";

function NoteContainer() {
  const [noteList, setNoteList] = useState([]);

  async function getNote() {
    const notes = await getNotes();
    setNoteList(notes);
  }

  const handleNoteAdded = async () => {
    await getNote(); // Wait for getNote to complete before proceeding
  };

  const handleNoteArchived = async (noteObj) => { // here earlier we are passing noteId now we are passing noteObj
    setNoteList(prevNoteList => prevNoteList.filter(note => !(note.id === noteObj.id && note.isArchived)));
    await archiveNotes(noteObj.id);
    await getNote(); // Refresh the note list after archiving
  };

  useEffect(() => {
    getNote();
  }, []);

  return (
    <div>
      <BasicTextFields onNoteAdded={handleNoteAdded} />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "7px", justifyContent: "center", alignItems: "center", overflow: "hidden", marginTop: "200px" }}>
        {noteList?.length ? (
          (() => {
            const filteredNotes = noteList?.filter(ele => !ele.isDeleted);
            console.log('Filtered Notes:', filteredNotes);
// done some changes in filterNotes
            return filteredNotes.map(ele => (
                <BasicCard key={ele.id} noteObj={ele} onNoteArchived={handleNoteArchived} />
              ));
            
          })()
        ) : (
          <span>Loading....</span>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
