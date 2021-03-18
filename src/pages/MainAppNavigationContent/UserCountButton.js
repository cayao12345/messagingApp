import React from "react";
import "./UserCountButton.css";

const UserCountButton = ({ buttonText, buttonOnClick }) => {
  return (
    <button
      onClick={() => {
        buttonOnClick();
      }}>
      {buttonText}
    </button>
  );
};

export default UserCountButton;
