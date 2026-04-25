import React from "react";
import { useNavigate } from "react-router";
import { Routes } from "../../const/routes";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { CHARACTERS } from "../../const/characters";

const TRANSLATION_KEYS = {
  home: {
    title: "home.title",
  },
};

export const Home = () => {
  const navigation = useNavigate();

  const { t } = useTranslation();

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

      <div className="flex gap-10 justify-center">
        {CHARACTERS.map((character) => {
          return <CharacterCard key={character.name} character={character} />;
        })}
      </div>
    </>
  );
};
