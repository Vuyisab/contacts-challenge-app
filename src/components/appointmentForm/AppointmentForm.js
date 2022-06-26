import React from "react";
import ContactPicker from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        required
      ></input>
      <ContactPicker name="contact" value={contact} contacts={contacts} handleChange={e =>setContact(e.target.value)} placeholder="Appointment with"/>
      <input
        type="date"
        name="date"
        value={date}
        min={getTodayString}
        onChange={(e) => setDate(e.target.value)}
        placeholder="date"
        required
      ></input>
      <input
        type="text"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="time"
        required
      ></input>
      <input type="submit" value="Add Appointment"/>
    </form>
  );
};
