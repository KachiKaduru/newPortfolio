import styles from "./Heading.module.css";

export default function Heading({ children, className }) {
  return <h2 className={`${styles.heading} ${className}`}>{children}</h2>;
}
