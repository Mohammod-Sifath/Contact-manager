import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addContact } from "./ContactSlice";
import {useNavigate} from "react-router-dom"
import { v4 as uuid } from 'uuid';

const AddContacts = () => {
  const [name, setName] = useState("");
  const [cell, setCell] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
 // const totalContact=useSelector((state)=>state.contactReducer.contacts.length)

  const handleSubmit=(e)=>{
    e.preventDefault();
    const id=uuid()
    const contact={id,name,cell}
    dispatch(addContact(contact)) 
    navigate('/')
  }

  return (
    <div className=" min-h-screen">
      <div className="flex justify-center"><h3>AddContacts</h3></div>
      <form className="flex-col justify-items-right" onSubmit={handleSubmit}>
      <div>
        <label>Contact Name:</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input
          type="text"
          value={cell}
          name="cell"
          onChange={(e) => setCell(e.target.value)}
          required
        />
      </div>
      <button>Submit</button>
      </form>
    </div>
  );
};
export default AddContacts;
