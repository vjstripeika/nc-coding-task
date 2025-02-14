import { useEffect } from "react";

export const useBodyLock = (shouldLock: boolean) => {
  useEffect(() => {
    if (shouldLock) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [shouldLock]);
};
