import { useMemo } from "react";

export function useAnswers(title: string) {
  return useMemo(() => {
    switch (title) {
      case "A1":
        return "LAINE";
      case "A2":
        return "ROUGE";
      case "A3":
        return "PLOUF";
      case "A4":
        return "AMOUR";
      case "A5":
        return "TERRE";
      case "A6":
        return "BATIR";
      case "A7":
        return "MEUTE";
      case "A8":
        return "LIONS";

      case "B1":
        return "AIMER";
      case "B2":
        return "PONTS";
      case "B3":
        return "PUBIS";
      case "B4":
        return "RUBIS";
      case "B5":
        return "SOMME";
      case "B6":
        return "FAIRE";
      case "B7":
        return "FERME";
      case "B8":
        return "GLACE";

      case "C1":
        return "JAUNE";
      case "C2":
        return "BLANC";
      case "C3":
        return "LAPIN";
      case "C4":
        return "BEBES";
      case "C5":
        return "BAILS";
      case "C6":
        return "PLAIT";
      case "C7":
        return "VEGAN";
      case "C8":
        return "ARCHI";

      case "D1":
        return "REVES";
      case "D2":
        return "PLANS";
      case "D3":
        return "MAINS";
      case "D4":
        return "ROUTE";
      case "D5":
        return "CHATS";
      case "D6":
        return "BIERE";
      case "D7":
        return "BISOU";
      case "D8":
        return "METAL";

      case "E1":
        return "IDIOT";
      case "E2":
        return "LINGE";
      case "E3":
        return "MANGE";
      case "E4":
        return "NOCES";
      case "E5":
        return "BELLE";
      case "E6":
        return "PUCES";
      case "E7":
        return "VICKY";
      case "E8":
        return "ROKET";

      case "F1":
        return "EPOUX";
      case "F2":
        return "FEMME";
      case "F3":
        return "HOMME";
      case "F4":
        return "TEUSH";
      case "F5":
        return "SAINT";
      case "F6":
        return "SEINS";
      case "F7":
        return "TETES";
      case "F8":
        return "SEXES";

      case "G1":
        return "NORME";
      case "G2":
        return "ENVIE";
      case "G3":
        return "BAISE";
      case "G4":
        return "SIEGE";
      case "G5":
        return "RICHE";
      case "G6":
        return "VIDEO";
      case "G7":
        return "VIVRE";
      case "G8":
        return "WALOU";

      case "H1":
        return "PLACE";
      case "H2":
        return "HOTEL";
      case "H3":
        return "VELOS";
      case "H4":
        return "PARIS";
      case "H5":
        return "PIZZA";
      case "H6":
        return "OCEAN";
      case "H7":
        return "CYCLE";
      case "H8":
        return "PENIS";
      default:
        return "";
    }
  }, []);
}
