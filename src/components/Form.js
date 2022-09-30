import React, { useState } from "react";
function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);
function handleFirstNameChange(event){
  setFirstName(event.target.value);
}
function handleLastNameChange(event){
  setLastName(event.target.value);
}
function handleNewsletterChange(event){
setNewsletter(event.target.value);
}
  return (
    <form>
      <lable htmlFor="newsletter">Subscribe to our Newsletter?</lable>
      <input type="checkbox"
      id="newsletter"
      onChange={handleNewsletterChange}
      checked ={newsletter}
      /><br/>
      <input type="text" onChange = {handleFirstNameChange} value={firstName} />
      <input type="text" onChange = {handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
