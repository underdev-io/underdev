import { useEffect } from "react";
import en from "./en";
import pt from "./pt";

const t = (key: string) => {
  const locale =
    typeof window !== "undefined"
      ? window.localStorage.getItem("underdev:locale") || "pt"
      : "pt";

  const tree: any = {
    en,
    pt,
  };

  return tree[locale][key] ? tree[locale][key] : key;
};

const useLocale = () => {
  return {
    t,
  };
};

export default useLocale;
