import { useRouter } from "next/router";
import { useEffect } from "react";
import en from "./en";
import pt from "./pt";

const t = (locale: string) => (key: string) => {
  const tree: any = {
    en,
    pt,
  };

  return tree[locale][key] ? tree[locale][key] : key;
};

const useLocale = () => {
  const router = useRouter();
  const locale = router.query.locale ? String(router.query.locale) : "pt";

  return {
    t: t(locale),
  };
};

export default useLocale;
