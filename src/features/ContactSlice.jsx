import { createSlice } from "@reduxjs/toolkit";

const initialContacts = {
  contacts: [
    {
      "id": "7da9cc23-4030-4836-a346-db9ef78fd0df",
      "name": "Sifath Ullah",
      "cell": "01701093108"
    },
    {
      "id": "6294fed2-8ec2-4b29-9d84-dc75fbcabc3c",
      "name": "Ammu",
      "cell": "01531171605"
    },
    {
      "id": "12cd7d32-2f17-4763-b9ff-568d16feb161",
      "name": "Mahathir",
      "cell": "01814842856"
    }
  ]
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
      console.log(state.contacts)
      state.contacts.push(action.payload)
    },
    deleteContact:(state,action)=>{
      const id=action.payload
      const index=state.contacts.findIndex((obj)=>obj.id===id)
      state.contacts.splice(index,1)
    },
    editContact:(state,action)=>{
      const data=action.payload;
      const {id,name,cell}=data;
      const isExist=state.contacts.filter((contact)=>contact.id===id)
      if (isExist) {
        isExist[0].name=name;
        isExist[0].cell=cell;
      }
       
    },
  },
});
export const {addContact,deleteContact,editContact } = contactSlice.actions;
export default contactSlice.reducer;
