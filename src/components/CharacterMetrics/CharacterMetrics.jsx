import { getCharacterMetrics } from "./characterMetrics.utils";
import { useTranslation } from "react-i18next";

const TRANSLATION_KEYS = {
  totalCharacters: "characterMetrics.totalCharacters",
  averageLevel: "characterMetrics.averageLevel",
  maxLevel: "characterMetrics.maxLevel",
};

export const CharacterMetrics = ({ characters }) => {
  const { t } = useTranslation();
  const metrics = getCharacterMetrics(characters);

  return (
    <section aria-label="character-metrics">
      <p>
        {t(TRANSLATION_KEYS.totalCharacters)}: {metrics.count}
      </p>
      <p>
        {t(TRANSLATION_KEYS.averageLevel)}: {metrics.averageLevel}
      </p>
      <p>
        {t(TRANSLATION_KEYS.maxLevel)}: {metrics.highestLevel}
      </p>
    </section>
  );
};
