import { useEffect, useRef } from "react";

/**
 * When the dependencies change, the callback is called
 * @param callback - The function to call when the dependencies change.
 * @param dependencies - An array of values that the callback depends on.
 */

// this hook is so similar to useEffect hook but it doesnt work on the first rerender
export default function useUpdateEffect(callback, dependencies) {
  /* When the dependencies change, the callback is called. */
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
