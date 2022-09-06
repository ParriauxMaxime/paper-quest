import { useMemo } from "react";

export function useAnswers(title: string) {
  return useMemo(() => {
    switch (btoa(title)) {
      case "QTE=":
        return "TEFJTkU=";
      case "QTI=":
        return "Uk9VR0U=";
      case "QTM=":
        return "UExPVUY=";
      case "QTQ=":
        return "QU1PVVI=";
      case "QTU=":
        return "VEVSUkU=";
      case "QTY=":
        return "QkFUSVI=";
      case "QTc=":
        return "TUVVVEU=";
      case "QTg=":
        return "TElPTlM=";

      case "QjE=":
        return "QUlNRVI=";
      case "QjI=":
        return "UE9OVFM=";
      case "QjM=":
        return "UFVCSVM=";
      case "QjQ=":
        return "UlVCSVM=";
      case "QjU=":
        return "U09NTUU=";
      case "QjY=":
        return "RkFJUkU=";
      case "Qjc=":
        return "RkVSTUU=";
      case "Qjg=":
        return "R0xBQ0U=";

      case "QzE=":
        return "SkFVTkU=";
      case "QzI=":
        return "QkxBTkM=";
      case "QzM=":
        return "TEFQSU4=";
      case "QzQ=":
        return "QkVCRVM=";
      case "QzU=":
        return "QkFJTFM=";
      case "QzY=":
        return "UExBSVQ=";
      case "Qzc=":
        return "VkVHQU4=";
      case "Qzg=":
        return "QVJDSEk=";

      case "RDE=":
        return "UkVWRVM=";
      case "RDI=":
        return "UExBTlM=";
      case "RDM=":
        return "TUFJTlM=";
      case "RDQ=":
        return "Uk9VVEU=";
      case "RDU=":
        return "Q0hBVFM=";
      case "RDY=":
        return "QklFUkU=";
      case "RDc=":
        return "QklTT1U=";
      case "RDg=":
        return "TUVUQUw=";

      case "RTE=":
        return "SURJT1Q=";
      case "RTI=":
        return "TElOR0U=";
      case "RTM=":
        return "TUFOR0U=";
      case "RTQ=":
        return "Tk9DRVM=";
      case "RTU=":
        return "QkVMTEU=";
      case "RTY=":
        return "UFVDRVM=";
      case "RTc=":
        return "VklDS1k=";
      case "RTg=":
        return "Uk9LRVQ=";

      case "RjE=":
        return "RVBPVVg=";
      case "RjI=":
        return "RkVNTUU=";
      case "RjM=":
        return "SE9NTUU=";
      case "RjQ=":
        return "VEVVU0g=";
      case "RjU=":
        return "U0FJTlQ=";
      case "RjY=":
        return "U0VJTlM=";
      case "Rjc=":
        return "VEVURVM=";
      case "Rjg=":
        return "U0VYRVM=";

      case "RzE=":
        return "Tk9STUU=";
      case "RzI=":
        return "RU5WSUU=";
      case "RzM=":
        return "QkFJU0U=";
      case "RzQ=":
        return "U0lFR0U=";
      case "RzU=":
        return "UklDSEU=";
      case "RzY=":
        return "VklERU8=";
      case "Rzc=":
        return "VklWUkU=";
      case "Rzg=":
        return "V0FMT1U=";

      case "SDE=":
        return "UExBQ0U=";
      case "SDI=":
        return "SE9URUw=";
      case "SDM=":
        return "VkVMT1M=";
      case "SDQ=":
        return "UEFSSVM=";
      case "SDU=":
        return "UElaWkE=";
      case "SDY=":
        return "T0NFQU4=";
      case "SDc=":
        return "Q1lDTEU=";
      case "SDg=":
        return "UEVOSVM=";
      default:
        return "";
    }
  }, []);
}
