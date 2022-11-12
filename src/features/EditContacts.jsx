import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {editContact} from "./ContactSlice"
import {useNavigate} from "react-router-dom"

const EditContacts = () => {
  const location=useLocation();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  const id=location.state.id
  const [name,setName]=useState(location.state.name)
  const [cell,setCell]=useState(location.state.cell)
  
  
  const handleEdit=(e)=>{
    e.preventDefault();
    const newBook={ id, name, cell}
    dispatch(editContact(newBook));
    navigate('/',{replace:true})
  }

  return (
    <div>
      <h3>EditContacts</h3>
      <form onSubmit={handleEdit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            name="name"
            id="name"
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            value={cell}
            id="cell"
            name="cell"
            placeholder={cell}
            onChange={(e) => setCell(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditContacts;
