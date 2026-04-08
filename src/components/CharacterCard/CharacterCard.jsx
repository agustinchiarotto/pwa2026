import styles from "./Character.module.css";

export const CharacterCard = ({ character }) => {
  return (
    <article className={styles.card}>
      <div className={styles.glow}></div>

      <div className={styles.header}>
        <span className={styles.badge}>Level {character.level}</span>
        <h2 className={styles.name}>{character.name}</h2>
      </div>

      <div className={styles.body}>
        <p className={styles.row}>
          <span className={styles.label}>Race</span>
          <span className={styles.value}>{character.race}</span>
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Class</span>
          <span className={styles.value}>{character.class}</span>
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Weapon</span>
          <span className={styles.value}>{character.weapon}</span>
        </p>

        <div className={styles.traitBox}>
          <span className={styles.label}>Trait</span>
          <p className={styles.trait}>{character.trait}</p>
        </div>
      </div>
    </article>
  );
};
