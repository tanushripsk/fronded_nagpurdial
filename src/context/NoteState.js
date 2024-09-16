import React, { useState } from "react";
import NoteContext from "./noteContext1";

const NoteState = (props) => {
  const host = "http://localhost:3000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // fetch all notes from database
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //add notes
  const addNote = async (firstname,middlename,lastname,emailid,businessname,businessaddress,number,businessDescription,pincode) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ firstname,middlename,lastname,emailid,businessname,businessaddress,number,businessDescription,pincode }),
    });
    const json = await response.json({ firstname,middlename,lastname,emailid,businessname,businessaddress,number,businessDescription,pincode});
    console.log(json);
    console.log("adding  new note");
    alert("Data added!");
    const note = {
      _id: "668cff086ab963d4dda6f6c8",
      user: "668cc4d41a021e2a8b2f60f8",

      firstname:firstname,
      middlename:middlename,
      lastname:lastname,
      emailid:emailid,
      businessname:businessname,
      businessaddress:businessaddress,
      number:number,
      businessDescription:businessDescription,
      pincode:pincode,
      date: "2024-03-12T17:07:46.714Z",
      __v: 0 
    };
    setNotes(notes.concat(note));
  };

  //delete notes
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      //  body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    console.log(json);
    console.log("deleting notes" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // edit with api database
  const editNote = async (id, firstname,middlename,lastname,emailid,businessname,businessaddress,number,businessDescription,pincode) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({firstname,middlename,lastname,emailid,businessname,businessaddress,number,businessDescription,pincode }),
    });
    const json = await response.json();
    console.log(json);

    var newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].firstname = firstname;
        newNotes[index].middlename = middlename;
        newNotes[index].lastname = lastname;
        newNotes[index].emailid = emailid;
        newNotes[index].businessname = businessname;
        newNotes[index].businessaddress = businessaddress;
        newNotes[index].number = number;
        newNotes[index].businessDescription = businessDescription;
        newNotes[index].pincode = pincode;
        
        break;
      }
      setNotes(newNotes);
    }
  };

  return (
    <div>
      <NoteContext.Provider value={{ notes, addNote, deleteNote, getNote, editNote }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteState;
