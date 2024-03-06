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

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", alignItems:"center", gap:"10px", marginTop:"10px" }}>
      {noteList?.length ? (
        noteList
          .filter((ele) => !ele.isDeleted)
          .map((ele) => <BasicCard key={ele.id} noteObj={ele} />)
      ) : (
        <span>Loading....</span>
      )}
    </div>
  );
}

export default ArchiveContainer;
