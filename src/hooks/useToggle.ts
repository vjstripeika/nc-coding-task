import { useCallback, useState } from "react";

export type ToggleHookReturns = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const useToggle = (initialState = false): ToggleHookReturns => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleOpen = useCallback(() => {
    setIsOpen((openState) => !openState);
  }, []);

  return { isOpen, toggleOpen };
};
