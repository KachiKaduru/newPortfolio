import styles from "./Stack.module.css";

export default function Stack({ tech }) {
  return (
    <div className={styles.stack}>
      <div className={styles.stackImg}>
        <img src={tech.img} alt="stack-img" />
      </div>

      <h3>{tech.stack}</h3>
    </div>
  );
}
