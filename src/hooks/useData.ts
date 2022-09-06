import { useMemo } from "react";

import qr from "qr.js";

export function useData() {
  return useMemo(() => {
    return new qr(
      `https://paper-quest.netlify.app${atob("P3E9aWxvdmV5b3Vmb3JldmVy")}`,
      {
        typeNumber: 4,
        errorCorrectLevel: 1,
      }
    ).modules;
  }, []);
}
