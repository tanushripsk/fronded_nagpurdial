import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/noteContext1";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    businessname: "",
    businessaddress: "",
    number: "",
    businessdescription: "",
    pincode: "",
  });
  useEffect(() => {
    getNote();
  }, []);

  const ref = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      firstname: currentNote.firstname,
      middlename: currentNote.middlename,
      lastname: currentNote.lastname,
      email: currentNote.email,
      businessname: currentNote.businessname,
      businessaddress: currentNote.businessaddress,
      businessdescription: currentNote.businessdescription,
      pincode: currentNote.pincode,
    });
  };
  const clickhere = (e) => {
    e.preventDefault();
    editNote(
      note.id,
      note.firstname,
      note.middlename,
      note.lastname,
      note.email,
      note.businessname,
      note.businessaddress,
      note.businessdescription,
      note.pincode
    );
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Edit Profile
      </button>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Update Profile</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="mb-3 mt-3">
                  <label for="fistname" class="form-label">
                    Firstname:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    placeholder="Enter firstname"
                    name="firstname"
                    onChange={onChange}
                    value={note.firstname}
                  />
                </div>
                <div class="mb-3">
                  <label for="pwd" class="form-label">
                    Middlename:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="middlename"
                    placeholder="Enter middlename"
                    name="middlename"
                    onChange={onChange}
                    value={note.middlename}
                  />
                </div>
                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">
                    Lastname:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    placeholder="Enter Lastname"
                    name="lastname"
                    onChange={onChange}
                    value={note.lastname}
                  />
                </div>

                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={onChange}
                    value={note.email}
                  />
                </div>

                <div class="mb-3 mt-3">
                  <label for="number" class="form-label">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="number"
                    placeholder="Enter number"
                    name="number"
                    onChange={onChange}
                    value={note.number}
                  />
                </div>

                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">
                    Businessname:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter business name"
                    name="businessname"
                    value={note.businessname}
                    onChange={onChange}
                  />
                </div>
                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">
                    businessaddress:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter business address"
                    name="businessaddress"
                    value={note.businessaddress}
                    onChange={onChange}
                  />
                </div>
                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">
                    BusinessDescription:
                  </label>
                  <input
                    type="textarea"
                    className="form-control"
                    placeholder="Enter business Description"
                    name="businessdescription"
                    rows="3"
                    value={note.businessdescription}
                    onChange={onChange}
                  />
                </div>

                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">
                    Pincode:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter pincode"
                    name="pincode"
                    value={note.pincode}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={clickhere}
                data-bs-dismiss="modal"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row my-3"> */}
      {/* <h1>My Notes</h1> */}
      {notes.map((note) => {
        // return note.title;
        return <NoteItem key={note._id} note={note} updateNote={updateNote} />;
      })}
      {/* </div> */}
    </>
  );
};

export default Notes;
