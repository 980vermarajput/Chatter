import React from "react";
import cx from "classnames";

const Message = (props) => {
  const { nextMessage, message, botTyping } = props;
  return (
    <p
      className={cx(
        "messages__message",
        "animate__animated animate__rubberBand",
        {
          "messages__message--me": message.user === "me",
          "messages__message--last":
            (!nextMessage && (!botTyping || message.user === "me")) ||
            (nextMessage && nextMessage.user !== message.user),
        }
      )}
      key={message.id}
    >
      {message.message}
    </p>
  );
};

export default Message;
