import { techStackArr } from "../other/techStacks";
import styles from "./StackContainer.module.css";
import Stack from "./Stack";

export default function StackContainer() {
  return (
    <div className={styles.stackContainer}>
      {techStackArr.map((tech) => (
        <Stack key={tech.id} tech={tech} />
      ))}
    </div>
  );
}
