import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainApp from "./pages/MainApp";
const App = () => {
  //const [numberOfUser, setNumberOfUser] = useState();
  const [allMessages, setAllMessages] = useState(
    localStorage.getItem("allMessages")
      ? JSON.parse(localStorage.getItem("allMessages"))
      : [
          {
            messageFrom: "Alfred",
            messagesContent: "Sample Messages",
            messageDate: "",
          },
        ]
  );

  const [currentUserCount, setCurrentUserCount] = useState(0);
  const [allCurrentUser, setAllCurrentUser] = useState([]);

  const sizeDifference = currentUserCount - allCurrentUser.length;
  const changingCurrentUser = (userCount) => {
    setCurrentUserCount(userCount);
  };

  const changingUsername = (id, username) => {
    setAllCurrentUser(
      allCurrentUser.map((data) => {
        data.id === id
          ? (data.username = username)
          : (data.username = data.username);
        return data;
      })
    );
  };

  useEffect(() => {
    if (sizeDifference > 0) {
      for (let i = 0; i < sizeDifference; i++) {
        setAllCurrentUser([
          ...allCurrentUser,
          {
            id:
              allCurrentUser.length > 0
                ? allCurrentUser[allCurrentUser.length - 1].id + 1
                : 1,
            username: "",
          },
        ]);
      }
    }

    if (sizeDifference < 0) {
      for (let i = sizeDifference; i <= 0; i++) {
        let newArray = [...allCurrentUser];
        newArray.pop();
        setAllCurrentUser(newArray);
      }
    }
  }, [sizeDifference]);

  const handleSetAllMessages = (message) => {
    setAllMessages([...allMessages, message]);
  };

  useEffect(() => {
    localStorage.setItem("allMessages", JSON.stringify(allMessages));
    console.log("went through");
  }, [allMessages]);

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route
            path="/MainApp"
            render={(props) => (
              <MainApp
                {...props}
                changingCurrentUser={changingCurrentUser}
                currentUserCount={currentUserCount}
                allCurrentUser={allCurrentUser}
                changingUsername={changingUsername}
                allMessages={allMessages}
                setAllMessages={handleSetAllMessages}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => {
              return <HomePage {...props} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
