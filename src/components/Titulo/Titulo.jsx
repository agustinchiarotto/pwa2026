import styles from "./Titulo.module.css";

export const Titulo = ({ texto }) => {
  return <h1 className={styles.titulo}>{texto}</h1>;
};
