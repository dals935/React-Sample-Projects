import styles from "./footer.module.css";
export default function Footer({ completedArrays, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}> Completed Tasks: {completedArrays}</span>
      <span className={styles.item}> Total Tasks: {totalTodos}</span>
    </div>
  );
}
