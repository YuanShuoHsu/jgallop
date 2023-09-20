import styles from "./index.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__loader}>
        <span style={{ "--i": 1 }} className={styles.loading__dot} />
        <span style={{ "--i": 2 }} className={styles.loading__dot} />
        <span style={{ "--i": 3 }} className={styles.loading__dot} />
        <span style={{ "--i": 4 }} className={styles.loading__dot} />
        <span style={{ "--i": 5 }} className={styles.loading__dot} />
        <span style={{ "--i": 6 }} className={styles.loading__dot} />
        <span style={{ "--i": 7 }} className={styles.loading__dot} />
        <span style={{ "--i": 8 }} className={styles.loading__dot} />
        <span style={{ "--i": 9 }} className={styles.loading__dot} />
        <span style={{ "--i": 10 }} className={styles.loading__dot} />
        <span style={{ "--i": 11 }} className={styles.loading__dot} />
        <span style={{ "--i": 12 }} className={styles.loading__dot} />
        <span style={{ "--i": 13 }} className={styles.loading__dot} />
        <span style={{ "--i": 14 }} className={styles.loading__dot} />
        <span style={{ "--i": 15 }} className={styles.loading__dot} />
        <span style={{ "--i": 16 }} className={styles.loading__dot} />
        <span style={{ "--i": 17 }} className={styles.loading__dot} />
        <span style={{ "--i": 18 }} className={styles.loading__dot} />
        <span style={{ "--i": 19 }} className={styles.loading__dot} />
        <span style={{ "--i": 20 }} className={styles.loading__dot} />
      </div>
      <span>LOADING...</span>
    </div>
  );
}
