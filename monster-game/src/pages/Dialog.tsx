import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TypingEffect from "../components/Dialog/TypingEffect";
const sentences: Array<string> = [
  "If you run into to a monster, you can battle it or catch it with the ball or just get out.",
  "If you choose to battle you have to tap. When you tap, the bar on the bottom will be filled. You have 30 seconds to tap",
  "If you fill up the bar you win and get the monster, If you loss, you don't get the monster and it will run away, and the monster will show up in different place",
  "If you choose to catch it with a ball. There will be a 30 seconds timer for you to tap and fill up the bar. If you run out the time you can't try again",
  "Let's start...",
];
const Dialog = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const handleNext = () => {
    if (index < sentences.length - 1) {
      setIndex(index + 1);
    } else {
      navigate("/camera");
    }
  };

  return (
    <>
      <div className="card">
        <TypingEffect text={sentences[index]} />
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Dialog;
