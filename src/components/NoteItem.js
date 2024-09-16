import React, { useContext } from "react";
import noteContext1 from "../context/noteContext1";

const NoteItem = (props) => {
  const context = useContext(noteContext1);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  // const { note } = props;
  return (
    <div className="col-lg-3">
      <div class="mt-2 p-2  text-black rounded">
        <p>{note.fistname}</p>
        <p>{note.middlename}</p>
        <p>{note.lastname}</p>
        <p>{note.email}</p>
        <p>{note.number}</p>
        <p>{note.businessname}</p>
        <p>{note.businessaddress}</p>
        <p>{note.businessdescription}</p>
        <p>{note.businesspincode}</p>
        <button
          onClick={() => {
            deleteNote(note._id);
          }}
          className="btn btn-secondary mx-2"
        >
          Delete
        </button>
        <button
          onClick={() => {
            updateNote(note);
          }}
          className="btn btn-secondary"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
