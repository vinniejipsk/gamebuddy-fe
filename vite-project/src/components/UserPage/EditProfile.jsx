import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateUserData } from "../../service/users";

function EditProfile({ userData, setUserData }) {
  const [formUserData, setFormUserData] = useState({});
  const { userId } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    updateUserData(formUserData, userId);
    setUserData(formUserData);
  }

  return (
    <form>
      <label>Name</label>
      <input
        value={formUserData.name || ""}
        onChange={(e) => {
          setFormUserData({
            ...formUserData,
            name: e.target.value,
          });
        }}
      />
      <br />
      <label>Email</label>
      <input
        value={formUserData.email || ""}
        onChange={(e) => {
          setFormUserData({
            ...formUserData,
            email: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={handleSubmit}>Done</button>
    </form>
  );
}

export default EditProfile;
