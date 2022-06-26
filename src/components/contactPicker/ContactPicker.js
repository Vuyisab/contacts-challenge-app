import React from "react";

export const ContactPicker = ({contacts,handleChange}) => {
  /*
  if(!contacts){
    contacts = {name: ""}
  }
  */
  return (
    <select onChange={handleChange}>
      <option>No contact selected</option>
      {contacts.map((contact,index)=><option key={index}>{contact.name}</option>)}
    </select>
  );
};

export default ContactPicker;