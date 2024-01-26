import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateUserData } from "../../service/users";
import { useDeprecatedInvertedScale } from "framer-motion";

function EditProfile({ userData, setUserData }) {
  const [formUserData, setFormUserData] = useState({});
  const { userId } = useParams();
  console.log("EDIT PROFILE USER ID:", userId);

  function handleSubmit(e) {
    e.preventDefault();
    updateUserData(formUserData, userId);
    setUserData(formUserData);
    // console.log("edit");
    // console.log("userdata id", userData._id);
    // // const userId = userData._id;
    // console.log(userId);
  }

  // const userId = userData._id;
  // console.log(userId);
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
