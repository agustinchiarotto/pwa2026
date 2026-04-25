import { useTranslation } from "react-i18next";
import { SetLocalStorage } from "../../services/localStorage";
import { LANGUAGES } from "../../const/languages";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    SetLocalStorage("language", newLang);
  };

  return (
    <div className="flex gap-8 justify-center">
      <button
        className="cursor-pointer border-1 p-4 rounded-2xl"
        onClick={() => changeLanguage(LANGUAGES.es)}
      >
        {t("spanish")}
      </button>
      <button
        className="cursor-pointer border-1 p-4 rounded-2xl"
        onClick={() => changeLanguage(LANGUAGES.en)}
      >
        {t("english")}
      </button>
    </div>
  );
};
