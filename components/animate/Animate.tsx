import { HTMLAttributes, useEffect, useState } from "react";

const AnimatedLetter = ({
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
  return show ? (
    <>
      <span className="animetedText">{letter}</span>
    </>
  ) : null;
};
export default function AnimatedText({
  styles,
  text,
}: {
  styles: string;
  text: string;
}) {
  const [reverse, setReverse] = useState(false);
  const [arrayText, setArrayText] = useState<string[]>([]);
  const [animationDelay, setAnimDelay] = useState(0);
  useEffect(() => {
    setArrayText(text.split(""));
    setAnimDelay((0.1 + text.length / 20) * 1000);
  }, [text]);
  useEffect(() => {
    if (reverse) {
      arrayText.map((i, index) => {
        const delay = (0.1 + index / 20) * 1000;
        deleteArray(delay);
      });
    }
  }, [reverse]);
  function deleteArray(delay: number) {
    setTimeout(() => {
      setArrayText((prevArrayText) => {
        const newArrayText = [...prevArrayText];
        newArrayText.pop();
        if (newArrayText.length === 0) {
          setTimeout(() => {
            setNewText();
          }, 200);
        }
        return newArrayText;
      });
    }, delay);
  }
  function setNewText() {
    setArrayText(text.split(""));
    setTimeout(() => {
      setReverse(false);
    }, animationDelay);
  }
  return (
    <>
      <p className={styles}>
        {arrayText.map((i, index) => {
          const delay = (0.1 + index / 20) * 1000;
          if (index === arrayText.length - 1) {
            if (!reverse) {
              setTimeout(() => {
                setReverse(true);
              }, animationDelay + 2000);
            }
          }
          return <AnimatedLetter delay={delay} letter={i} key={delay} />;
        })}
        <span className="animetedSpan">|</span>
      </p>
    </>
  );
}
