import { useTranslation } from "react-i18next";
import styles from "./Character.module.css";

export const CharacterCard = ({ character }) => {
  const { t } = useTranslation();

  return (
    <article className={styles.card}>
      <div className={styles.glow}></div>

      <div className={styles.header}>
        <span className={styles.badge}>
          {t("characterCard.level")} {character.level}
        </span>
        <h2 className={styles.name}>{character.name}</h2>
      </div>

      <div className={styles.body}>
        <p className={styles.row}>
          <span className={styles.label}>{t("characterCard.race")}</span>
          <span className={styles.value}>{character.race}</span>
        </p>

        <p className={styles.row}>
          <span className={styles.label}>{t("characterCard.class")}</span>
          <span className={styles.value}>{character.class}</span>
        </p>

        <p className={styles.row}>
          <span className={styles.label}>{t("characterCard.weapon")}</span>
          <span className={styles.value}>{character.weapon}</span>
        </p>

        <div className={styles.traitBox}>
          <span className={styles.label}>{t("characterCard.trait")}</span>
          <p className={styles.trait}>{character.trait}</p>
        </div>
      </div>
    </article>
  );
};
