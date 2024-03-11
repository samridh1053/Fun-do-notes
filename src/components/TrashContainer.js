import React, { useEffect, useState } from "react";
import BasicCard from "./NoteCard";
import { NavBar } from "./NavBar";
import { getTrash } from "../Services/NoteServices";
import "./TrashContainer.css";

function TrashContainer() {
  const [noteList, setNoteList] = useState([]);
  const [gridView, setGridView] = useState(true);

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
    <div>
      <NavBar gridView={gridView} setGridView={setGridView} />
      <div>
        {gridView ? (
          <div className="noteSet">
            {noteList?.length ? (
              noteList
                .filter((ele) => !ele.isArchived)
                .map((ele) => (
                  <BasicCard
                    key={ele.id}
                    noteObj={ele}
                    isGridView={gridView}
                    onNoteDeleted={handleNoteDeleted}
                  />
                ))
            ) : (
              <span>Loading....</span>
            )}
          </div>
        ) : (
          <div className="noteSet2">
            {noteList?.length ? (
              noteList
                .filter((ele) => !ele.isArchived)
                .map((ele) => (
                  <BasicCard
                    key={ele.id}
                    noteObj={ele}
                    isGridView={gridView}
                    onNoteDeleted={handleNoteDeleted}
                  />
                ))
            ) : (
              <span>Loading....</span>
            )}
          </div>
        )}
      </div>
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <div className="noteSet">
          {noteList?.length ? (
            noteList
              .filter((ele) => !ele.isArchived)
              .map((ele) => (
                <BasicCard
                  key={ele.id}
                  noteObj={ele}
                  onNoteDeleted={handleNoteDeleted}
                />
              ))
          ) : (
            <span>Loading....</span>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default TrashContainer;
