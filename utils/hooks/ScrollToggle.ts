import { useEffect, useState } from "react";
interface ScrollToggleProps {
  targetClasses: string[];
  visibleClass: string;
  originalClass: string;
}

const useScrollToggle = ({
  targetClasses,
  visibleClass,
  originalClass,
}: ScrollToggleProps) => {
  const [isScrolled, setIsScrolled] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      const updatedIsScrolled = { ...isScrolled };
      targetClasses.forEach((targetClass) => {
        const element = document.querySelector(`.${targetClass}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isElementVisible = rect.top <= window.innerHeight;
          updatedIsScrolled[targetClass] = isElementVisible;
        }
      });
      setIsScrolled(updatedIsScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetClasses]);

  useEffect(() => {
    targetClasses.forEach((targetClass) => {
      if (isScrolled[targetClass]) {
        const targets = document.querySelectorAll(`.${targetClass}`);
        targets.forEach((target) => target.classList.add(visibleClass));
      } else {
        const belowViewport = document.querySelectorAll(
          `.${targetClass}:not(.${visibleClass})`
        );
        belowViewport.forEach((target) =>
          target.classList.remove(visibleClass)
        );
      }
    });
  }, [isScrolled, targetClasses, visibleClass]);

  return isScrolled;
};

export default useScrollToggle;
