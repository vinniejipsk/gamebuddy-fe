import React, { useState } from "react";

function EditProfile({ userData, setUserData, updateUserData }) {
  const [formUserData, setFormUserData] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    updateUserData(formUserData);
    setUserData(formUserData);
  }

  return (
    <form>
      <label>Name</label>
      <input
        value={formUserData.name || ""}
        onChange={(e) => {
          console.log(e.target.value);
          setFormUserData({
            ...formUserData,
            name: e.target.value,
          });
          console.log(formUserData);
        }}
      />
      <br />
      <label>Email</label>
      <input
        value={formUserData.email || ""}
        onChange={(e) => {
          console.log(e.target.value);
          setFormUserData({
            ...formUserData,
            email: e.target.value,
          });
          console.log(formUserData);
        }}
      />
      <br />
      <button onClick={handleSubmit}>Done</button>
    </form>
  );
}

export default EditProfile;
