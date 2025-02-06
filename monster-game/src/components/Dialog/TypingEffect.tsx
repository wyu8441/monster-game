import { useState, useEffect } from "react";
import "./TypingEffect.scss";
const TypingEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  // Litsen input text and reset display text when sentence changes
  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);
  // Typing input text
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <p>{displayedText}</p>;
};
export default TypingEffect;
