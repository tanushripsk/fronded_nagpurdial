import React, { useContext, useState } from "react";
import noteContext1 from "../context/noteContext1";

const AddNote = () => {
  const context = useContext(noteContext1);
  const { addNote } = context;
  const [note, setNote] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    emailid: "",
    businessname: "",
    businessaddress: "",
    number: "",
    businessdescription: "",
    pincode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(
      note.firstname,
      note.middlename,
      note.lastname,
      note.emailid,
      note.businessname,
      note.businessaddress,
      note.number,
      note.businessdescription,
      note.pincode
    );
    // Optionally clear the form after submission
    setNote({
      firstname: "",
      middlename: "",
      lastname: "",
      emailid: "",
      businessname: "",
      businessaddress: "",
      number: "",
      businessdescription: "",
      pincode: "",
    });
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="firstname" className="form-label">
            Firstname:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter firstname"
            name="firstname"
            value={note.firstname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="middlename" className="form-label">
            Middlename:
          </label>
          <input
            type="text"
            className="form-control"
            id="middlename"
            placeholder="Enter middlename"
            name="middlename"
            value={note.middlename}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="lastname" className="form-label">
            Lastname:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter Lastname"
            name="lastname"
            value={note.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="emailid" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="emailid"
            placeholder="Enter email"
            name="emailid"
            value={note.emailid}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="number" className="form-label">
            Mobile Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="Enter number"
            name="number"
            value={note.number}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="businessname" className="form-label">
            Businessname:
          </label>
          <input
            type="text"
            className="form-control"
            id="businessname"
            placeholder="Enter business name"
            name="businessname"
            value={note.businessname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="businessaddress" className="form-label">
            Business Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="businessaddress"
            placeholder="Enter business address"
            name="businessaddress"
            value={note.businessaddress}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="businessdescription" className="form-label">
            Business Description:
          </label>
          <textarea
            className="form-control"
            id="businessdescription"
            placeholder="Enter business Description"
            name="businessdescription"
            rows="3"
            value={note.businessdescription}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="pincode" className="form-label">
            Pincode:
          </label>
          <input
            type="text"
            className="form-control"
            id="pincode"
            placeholder="Enter pincode"
            name="pincode"
            value={note.pincode}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
