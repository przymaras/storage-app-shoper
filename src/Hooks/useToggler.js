import { useState } from "react/cjs/react.development";

function useToggler(defaultState = false) {
  const [isToggled, setIsToggled] = useState(defaultState);

  function toggle() {
    setIsToggled((prevState) => !prevState);
  }
  return [isToggled, toggle];
}

export { useToggler };
