import { useMemo } from "react";

import qr from "qr.js";

export function useData() {
  return useMemo(
    () =>
      new qr("https://paper-quest.netlify.app?q=iloveuforever", {
        typeNumber: 4,
        errorCorrectLevel: 1,
      }).modules,
    []
  );
}
