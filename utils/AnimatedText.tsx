import { useEffect, useState } from "react";
import { AnimatedLetter } from "./AnimatedLetter";

export default function AnimatedText({
  styles,
  text,
}: {
  styles: string;
  text: string;
}) {
  const [numberOfTextTyping, setNumberOfTextTyping] = useState(1);
  const [reverse, setReverse] = useState(false);
  const [arrayText, setArrayText] = useState<string[]>([]);
  const [animationDelay, setAnimDelay] = useState(0);

  const getRangomStringHomepage = (numberOfTextTyping: number) => {
    setNumberOfTextTyping((prev) => (prev === 2 ? 0 : prev + 1));

    const arrayString = [
      "Empowering Carriers, Shippers and Freight Forwarders with Real-Time DEFI Payments",
      "Streamlined Contract Execution and Payment Solutions for Supply Chains",
      "Embracing Transparency, Efficiency, and Trust in the World of Freight Operations",
    ];
    return arrayString[numberOfTextTyping];
  };

  useEffect(() => {
    setArrayText(text.split(""));
    setAnimDelay((0.1 + text.length / 20) * 1000);
  }, [text]);

  useEffect(() => {
    if (reverse) {
      arrayText.forEach((_, index) => {
        const delay = (0.1 + index / 20) * 1000;
        deleteArray(delay);
      });
    }
  }, [reverse]);

  function deleteArray(delay: number) {
    setTimeout(() => {
      setArrayText((prevArrayText) => {
        const newArrayText = prevArrayText.slice(0, -1);
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
    const newRandomText = getRangomStringHomepage(numberOfTextTyping);
    setArrayText(newRandomText.split(""));
    setAnimDelay((0.1 + newRandomText.length / 20) * 1000);
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
