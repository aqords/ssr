import React, { useEffect } from "react";

interface ScrollClassHookProps {
  elementRefs: React.RefObject<HTMLElement>[];
  className: string;
}

const useScrollClass = ({ elementRefs, className }: ScrollClassHookProps) => {
  useEffect(() => {
    const handleScroll = () => {
      elementRefs.forEach((elementRef) => {
        if (elementRef.current) {
          const { top, height } = elementRef.current.getBoundingClientRect();
          const visibleHeight = window.innerHeight - top;

          if (visibleHeight < height && visibleHeight < 300) {
            elementRef.current.classList.add(className);
          } else {
            elementRef.current.classList.remove(className);
          }
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRefs, className]);
};

export default useScrollClass;
