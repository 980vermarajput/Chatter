import { useEffect, useState } from "react";

const TypingMessage = () => {
  const [numberOfDots, setDots] = useState(1);

  useEffect(() => {
    const incrementDots = () => {
      setDots(numberOfDots === 3 ? 1 : numberOfDots + 1);
    };
    const timeout = setTimeout(incrementDots, 500);
    return () => clearTimeout(timeout);
  }, [numberOfDots]);

  return (
    <p className="messages__message messages__message--typing" key="typing">
      {`Typing${"".padStart(numberOfDots, ".")}`}
    </p>
  );
};

export default TypingMessage;
