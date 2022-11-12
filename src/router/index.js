import React from 'react';
import Error from "../pages/Error"
import ViewContacts from "../features/ViewContacts"
import AddContacts from "../features/AddContacts"
import EditContacts from "../features/EditContacts";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<ViewContacts/>} />
        <Route path='/add-contact' element={<AddContacts/>} />
        <Route path='/edit-contact' element={<EditContacts/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
export default Index