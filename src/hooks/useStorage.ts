import { useCallback } from "react";

const item = "answers";

export function useStorage() {
  const getAnswers = useCallback(() => {
    return JSON.parse(localStorage.getItem(item) || "{}");
  }, []);

  return {
    getAnswers,
    setAnswers: (key: string, value: string) => {
      localStorage.setItem(
        item,
        JSON.stringify({
          ...getAnswers(),
          [key]: value,
        })
      );
    },
    clearAnswers: () => localStorage.removeItem(item),
  };
}
