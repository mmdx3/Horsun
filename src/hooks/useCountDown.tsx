import { useEffect, useState } from "react";

const useCountDown = () => {
  const [counter, setcounter] = useState<number>(120);
  useEffect(() => {
    const timer = setInterval(() => {
      counter > 0 && setcounter(counter - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return counter
};

export default useCountDown;
