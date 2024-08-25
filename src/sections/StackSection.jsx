import styles from "./StackSection.module.css";

import Heading from "../components/Heading";
import StackContainer from "../components/StackContainer";

export default function StackSection() {
  return (
    <section id="stack" className={styles.stackStn}>
      <Heading>my tech stack</Heading>

      <p> Technologies I&apos;ve been working with recently</p>

      <StackContainer />
    </section>
  );
}
