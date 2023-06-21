import { useEffect } from "react";

interface ScrollClassHookProps {
  elementRef: React.RefObject<HTMLElement>;
  className: string;
}

const useScrollClass = ({ elementRef, className }: ScrollClassHookProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const { top, height } = elementRef.current.getBoundingClientRect();
        const visibleHeight = window.innerHeight - top;

        if (visibleHeight < height && visibleHeight < 200) {
          elementRef.current.classList.add(className);
        } else {
          elementRef.current.classList.remove(className);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, className]);
};

export default useScrollClass;
