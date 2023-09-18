import styles from "./index.module.scss";

export default function FooterCompanyInfo() {
  return (
    <div className={styles.footerCompanyInfo}>
      <h4 className={styles.footerCompanyInfo__name}>
        引時通（北京）科技有限公司
      </h4>
      <p className={styles.footerCompanyInfo__address}>
        地址：北京市朝陽區建國路15號院甲1號北岸1292三間房創意生活園區9-7101
      </p>
      <p className={styles.footerCompanyInfo__email}>
        e-mail：service@funjatrip.com
      </p>
    </div>
  );
}
