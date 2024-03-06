import React, { useEffect, useState } from "react";
import BasicCard from "./NoteCard";
import { getTrash } from "../Services/NoteServices";

function TrashContainer(){
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
      const fetchDelete = async () => {
        const notes = await getTrash();
        setNoteList(notes);
      };
  
      fetchDelete();
    }, []);
  
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", alignItems:"center", gap:"10px", marginTop:"10px" }}>
        {noteList?.length ? (
          noteList
            .filter((ele) => !ele.isArchived)
            .map((ele) => <BasicCard key={ele.id} noteObj={ele} />)
        ) : (
          <span>Loading....</span>
        )}
      </div>
    );
}

export default TrashContainer;


