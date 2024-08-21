import styles from "./Logo.module.css";

export default function Logo() {
  const logo = "{Kachi}";

  return (
    <div className={styles.logo}>
      <h1> {logo}</h1>
    </div>
  );
}
