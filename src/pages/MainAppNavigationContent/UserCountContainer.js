import React from "react";
import UserCountButton from "./UserCountButton";
import "./UserCountContainer.css"

const UserCountContainer = ({ changingCurrentUser, currentUserCount }) => {
  return (
    <div className="containerButton">
        <h2>How many user's you want ? </h2>
      <div className="allButtons">
        <UserCountButton
          buttonText={1}
          buttonOnClick={() => {
            changingCurrentUser(1);
          }}
        />
        <UserCountButton
          buttonText={2}
          buttonOnClick={() => {
            changingCurrentUser(2);
          }}
        />
        <UserCountButton
          buttonText={3}
          buttonOnClick={() => {
            changingCurrentUser(3);
          }}
        />
      </div>
    </div>
  );
};

export default UserCountContainer;
