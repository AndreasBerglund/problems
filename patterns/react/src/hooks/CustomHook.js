import { useState, useEffect } from "react";

/**
 * The hooks pattern make it easy to remove state / logic from
 * a component. It also makes it very reusable
 */

const useCountTo = (to = 10) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCount) => {
        if (prevCount == to) {
          clearInterval(timer);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return [counter];
};

const CustomHook = () => {
  const [counter] = useCountTo(10);
  return <p>{counter}</p>;
};

export default CustomHook;
