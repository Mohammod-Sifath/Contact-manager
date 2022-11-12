import React from "react";
import { useSelector } from "react-redux";

import ContactCard from "./ContactCard";

const ViewContacts = () => {
  const contacts = useSelector((state) => state.contactReducer.contacts);

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        // clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className=" min-h-screen">
      <div className="flex justify-center">
        <h3 className="text-neutral-50">ViewContacts</h3>
      </div>
      {renderContactList.length > 0
        ? renderContactList
        : "no contacts available"}
    </div>
  );
};

export default ViewContacts;
