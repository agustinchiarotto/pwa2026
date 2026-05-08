import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { Routes } from "../../const/routes";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { CHARACTERS } from "../../const/characters";
import { CheckBox } from "../../components/Checkbox/Checkbox";
import { CharacterMetrics } from "../../components/CharacterMetrics/CharacterMetrics";
import { Button } from "../../components/Button/Button";

const TRANSLATION_KEYS = {
  home: {
    title: "home.title",
  },
};

export const Home = () => {
  const navigation = useNavigate();
  const [showHighLevelOnly, setShowHighLevelOnly] = useState(false);

  const { t } = useTranslation();

  const visibleCharacters = useMemo(() => {
    if (!showHighLevelOnly) {
      return CHARACTERS;
    }

    return CHARACTERS.filter((character) => character.level >= 8);
  }, [showHighLevelOnly]);

  //la llamada al service

  return (
    <>
      <LanguageSwitcher />
      <h1>{t(TRANSLATION_KEYS.home.title)}</h1>
      <button
        onClick={() => {
          navigation(Routes.profile);
        }}
      >
        {" "}
        Profile{" "}
      </button>

      <CheckBox
        id="high-level-filter"
        name="high-level-filter"
        label="Solo nivel 8+"
        checked={showHighLevelOnly}
        onChange={(event) => {
          setShowHighLevelOnly(event.target.checked);
        }}
      />

      <CharacterMetrics characters={visibleCharacters} />

      <Button onClick={() => console.log("click")} label="click" disabled />

      <div className="flex gap-10 justify-center">
        {visibleCharacters.map((character) => {
          return <CharacterCard key={character.name} character={character} />;
        })}
      </div>
    </>
  );
};
