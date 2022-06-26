import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handle = (e)=>{e.preventDefault();alert("form submitted")}
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Contact Name"
        required
      ></input>
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email address"
        required
      ></input>
      <br />
      <input
        type="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="###-###-####"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      ></input>
      <br />
      <input type="submit" value="Add contact" />
    </form>
  );
};
