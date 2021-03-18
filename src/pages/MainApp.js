import React, { useState } from "react";
import { FaBars, IoClose } from "react-icons/all";
import "./MainApp.css";
import MainAppNavigationItems from "./MainAppNavigationItems";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import NavigationItems from "./MainAppNavigationItems/NavigationItems";
import ChatContainer from "./MainAppNavigationContent/ChatContainer";
import UserCountContainer from "./MainAppNavigationContent/UserCountContainer";

const MainApp = ({
  changingCurrentUser,
  currentUserCount,
  allCurrentUser,
  changingUsername,
  allMessages,
  setAllMessages,
}) => {
  const [navigationContainerActive, setNavigationContainerActive] = useState(
    false
  );

  return (
    <div className="mainAppContainer">
      <Router>
        <nav>
          <button
            className="navigationBarButton"
            onClick={() => {
              setNavigationContainerActive(!navigationContainerActive);
            }}
          >
            <FaBars className="icon" />
          </button>

          <div
            className={
              navigationContainerActive
                ? "navigationContainer active"
                : "navigationContainer"
            }>
            <button
              onClick={() => {
                setNavigationContainerActive(!navigationContainerActive);
              }}
            >
              <IoClose className="icon" />
            </button>
            <ul>
              {" "}
              {MainAppNavigationItems.map((data, index) => {
                return <NavigationItems key={index} data={data} />;
              })}
            </ul>
          </div>
        </nav>
        <Switch>
          <Route
            path="/UserCount"
            render={(props) => {
              

              return (
                <UserCountContainer
                  {...props}
                  changingCurrentUser={changingCurrentUser}
                  currentUserCount={currentUserCount}
                />
              );
            }}
          />
          <Route 
            path="/ChatContainer"
            render={(props) => {
              
              return (
                <ChatContainer
                  {...props}
                  allCurrentUser={allCurrentUser}
                  changingUsername={changingUsername}
                  allMessages={allMessages}
                  setAllMessages={setAllMessages}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default MainApp;
