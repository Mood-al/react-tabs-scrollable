import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export const useEnhancedEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export const useEventCallback = (fn) => {
  const callbackRef = useRef(fn);

  useEnhancedEffect(() => {
    callbackRef.current = fn;
  });

  return useCallback((...args) => callbackRef.current(...args), []);
};

export default useEventCallback;
