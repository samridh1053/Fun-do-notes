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
    await getNote(); // Wait for getNote to complete before proceeding
  };

  const update=(noteObj)=>{
    console.log("fsgshrhbsf");
    setNoteList(noteList.map((note)=>{
      if (note.id === noteObj.id) return noteObj
      return note
    }))
  }

  const handleNoteArchived = async (noteObj) => {
    try {
      // Optimistically update UI first
      setNoteList((prevNoteList) =>
        prevNoteList.map((note) =>
          note.id === noteObj.id && !note.isArchived
            ? { ...note, isArchived: true } // Assuming isArchived is a boolean property
            : note
        )
      );
  
      // Perform the archive operation
      await archiveNotes(noteObj.id);
  
      // After archiving, update the note list again
      const updatedNotes = await getNotes();
      setNoteList(updatedNotes);
    } catch (error) {
      console.error("Error archiving note:", error);
      // Handle error and possibly revert the optimistic update
      // For simplicity, you can reload the notes in case of an error
      getNote();
    }
  };
  const handleNoteDeleted = async (noteObj) => {
    try {
      // Optimistically update UI first
      setNoteList((prevNoteList) =>
        prevNoteList.filter((note) => note.id !== noteObj.id)
      );

      // Perform the delete operation
      // Assuming you have a deleteNotes function in your NoteServices
      await trashNotes(noteObj.id);

      // Optionally, you can update the note list again after deletion
      const updatedNotes = await getNotes();
      setNoteList(updatedNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
      // Handle error and possibly revert the optimistic update
      // For simplicity, you can reload the notes in case of an error
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
