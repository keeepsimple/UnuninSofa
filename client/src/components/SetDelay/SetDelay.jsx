import React from "react";

const useDebounceCallback = (delay = 100) => {
  const ref = React.useRef();
  return (callback) => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(callback, delay);
  };
};

export default useDebounceCallback;
