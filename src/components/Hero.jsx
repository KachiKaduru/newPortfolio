import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.about}>
        <h1>
          Hi My name is <ColouredName /> I build things for the web
        </h1>
      </div>

      <div className={styles.imgContainer}></div>
    </section>
  );
}

function ColouredName() {
  return (
    <p className={styles.name}>
      <span>Kachi</span>
      <span>Kaduru</span>
    </p>
  );
}
