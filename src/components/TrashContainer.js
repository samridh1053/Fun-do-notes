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

    const handleNoteDeleted = async (noteObj) => {
        try {
    
          setNoteList((prevNoteList) =>
            prevNoteList.map((note) =>
              note.id === noteObj.id && note.isDeleted
                ? { ...note, isDeleted: false }
                : note
            )
          );
    
        } catch (error) {
          console.error("Error deleted note:", error);
    
        }
      };
  
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", alignItems:"center", gap:"10px", marginTop:"10px" }}>
        {noteList?.length ? (
          noteList
            .filter((ele) => !ele.isArchived)
            .map((ele) => <BasicCard key={ele.id} noteObj={ele} onNoteDeleted={handleNoteDeleted}/>)
        ) : (
          <span>Loading....</span>
        )}
      </div>
    );
}

export default TrashContainer;


