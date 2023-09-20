import PopularGrid from "./PopularGrid";
import styles from "./index.module.scss";

export default function Popular() {
  return (
    <div className={styles.popular}>
      <h2 className={styles.popular__title}>熱門行程</h2>
      <p className={styles.popular__description}>找出您所愛的</p>
      <PopularGrid />
    </div>
  );
}
