import { useState } from "react";

export const AnimatedLetter = ({
  delay,
  letter,
}: {
  delay: number;
  letter: string;
}) => {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, delay);
  return show ? <span className="animetedText">{letter}</span> : <></>;
};
