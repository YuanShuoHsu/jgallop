import GalleryThumbs from "./GalleryThumbs";
// import SchoolsThumbsGallery from "./SchoolsThumbsGallery";

import styles from "./index.module.scss";

interface SchoolsProps {
  data: {};
}

export default function Schools({ data }: SchoolsProps) {
  return (
    <div className={styles.schools}>
      <h2 className={styles.schools__title}>名校遊學趣</h2>
      <p className={styles.schools__description}>
        各地最知名學校，給你不同的體驗
      </p>
      <GalleryThumbs />
      {/* <SchoolsThumbsGallery /> */}
    </div>
  );
}
