import React, { useEffect, useState } from "react";
import BasicCard from "./NoteCard";
import { getArchive } from "../Services/NoteServices";


function ArchiveContainer() {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    const fetchArchive = async () => {
      const notes = await getArchive();
      setNoteList(notes);
    };

    fetchArchive();
  }, []);

// for unarchive
  const handleNoteArchived = async (noteObj) => {
    try {

      setNoteList((prevNoteList) =>
        prevNoteList.map((note) =>
          note.id === noteObj.id && note.isArchived
            ? { ...note, isArchived: false }
            : note
        )
      );

    } catch (error) {
      console.error("Error archiving note:", error);

    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", alignItems:"center", gap:"10px", marginTop:"10px" }}>
      {noteList?.length ? (
        noteList
          .filter((ele) => !ele.isDeleted)
          .map((ele) => <BasicCard key={ele.id} noteObj={ele}  onNoteArchived={handleNoteArchived}/>)
      ) : (
        <span>Loading....</span>
      )}
    </div>
  );
}

export default ArchiveContainer;
