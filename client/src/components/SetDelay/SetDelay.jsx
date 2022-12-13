import React from "react";

const useDebounceCallback = (delay = 100, cleaning = true) => {
  const ref = React.useRef();
  React.useEffect(() => {
    if (cleaning) {
      return () => {
        if (ref.current) clearTimeout(ref.current);
      };
    }
  }, []);
  return (callback) => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(callback, delay);
  };
};

export default useDebounceCallback;
