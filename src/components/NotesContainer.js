import BasicCard from "./NoteCard";
import BasicTextFields from "../components/CreateNote";
import { archiveNotes, trashNotes } from "../Services/NoteServices";
import { useEffect, useState } from "react";
import { getNotes } from "../Services/NoteServices";

function NoteContainer() {
  const [noteList, setNoteList] = useState([]);

  async function getNote() {
    const notes = await getNotes();
    setNoteList(notes);
  }

  const handleNoteAdded = async () => {
    await getNote(); 
  };

  const update=(noteObj)=>{
    // console.log("hello");
    setNoteList(noteList.map((note)=>{
      if (note.id === noteObj.id) return noteObj
      return note
    }))
  }

  const handleNoteArchived = async (noteObj) => {
    try {
  
      setNoteList((prevNoteList) =>
        prevNoteList.map((note) =>
          note.id === noteObj.id && !note.isArchived
            ? { ...note, isArchived: true } 
            : note
        )
      );
  
      await archiveNotes(noteObj.id);
  
      const updatedNotes = await getNotes();
      setNoteList(updatedNotes);
    } catch (error) {
      console.error("Error archiving note:", error);

      getNote();
    }
  };
  const handleNoteDeleted = async (noteObj) => {
    try {
    
      setNoteList((prevNoteList) =>
        prevNoteList.filter((note) => note.id !== noteObj.id)
      );

      await trashNotes(noteObj.id);

      const updatedNotes = await getNotes();
      setNoteList(updatedNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
      getNote();
    }
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
            const filteredNotes = noteList?.filter(ele => !ele.isArchived && !ele.isDeleted);
            console.log('Filtered Notes:', filteredNotes);

            return filteredNotes.map(ele => (
                <BasicCard key={ele.id} noteObj={ele} onNoteArchived={handleNoteArchived} onNoteDeleted={handleNoteDeleted} update={update} />
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
