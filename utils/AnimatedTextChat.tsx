import React, { useEffect, useState } from "react";

const useTypewriter = (text: string) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let animationFrame: number;

    const animateTyping = () => {
      setCurrentText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex < text.length) {
        animationFrame = requestAnimationFrame(animateTyping);
      }
    };

    if (currentIndex < text.length) {
      animationFrame = requestAnimationFrame(animateTyping);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [text]);

  return currentText;
};

export default useTypewriter;
