import React from "react";
import { IoIosSend } from "react-icons/all";
import Moment from "moment";
const ChatContainerElements = ({
  data,
  changingUsername,
  allMessages,
  setAllMessages,
}) => {
  return (
    <div className="userChatContainer">
      <h2>{data.username}</h2>

      <div className="scrollDiv">
        <div className="messageContainer">
          {allMessages
            .slice()
            .reverse()
            .map((message, index) => {
              return message.messageFrom === data.username ? (
                <UserMessages key={index} message={message} />
              ) : (
                <OtherMessages key={index} message={message} />
              );
            })}
        </div>
      </div>

      <div className="inputContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            console.log(<Moment startOf={"day"} fromNow />);
            setAllMessages({
              messageFrom: data.username,
              messageContent: e.target.elements.textMessages.value,
              messageDate: "",
            });
          }}
        >
          <textarea cols="30" rows="10" name="textMessages"></textarea>
          <button type="submit">
            {" "}
            <IoIosSend className="icon" />{" "}
          </button>
        </form>
      </div>

      <div
        className={
          data.username
            ? "enterUsernameOverlay "
            : "enterUsernameOverlay active"
        }
      >
        <h2>Enter Userame. </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            changingUsername(data.id, e.target.elements.username.value);
          }}
        >
          <input type="text" name="username" id="" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const OtherMessages = ({ message }) => {
  return (
    <div className="otherMessage message">
      <p className="textMessages">{message.messageContent}</p>
      <p className="date">{message.messageDate}</p>
      <p className="from">{message.messageFrom}</p>
    </div>
  );
};

const UserMessages = ({ message }) => {
  return (
    <div className="usersMessage message">
      <p className="textMessages">{message.messageContent}</p>
      <p className="date">{message.messageDate}</p>
      <p className="from">{message.messageFrom}</p>
    </div>
  );
};

export default ChatContainerElements;
