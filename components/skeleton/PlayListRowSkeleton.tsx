import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../../styles/skeleton.module.css";

interface props {
  skeletonLength: number;
}

const PlayListRowSkeleton: React.FC<props> = ({ skeletonLength }) => {
  let length = Array.from(Array(skeletonLength).keys());
  return (
    <div className={styles.skeletonRowContaner}>
      {length.map(() => (
        <div className={styles.skeletonRowItem}>
          <div className={styles.skeletonRowImage}>
            <Skeleton
              count={1}
              height={160}
              width={160}
              baseColor="#1f1f1f4a"
              highlightColor="#1f1f1f4a"
            />
          </div>

          <p>
            <Skeleton
              baseColor="#1f1f1f4a"
              highlightColor="#1f1f1f4a"
              count={1}
              width={160}
            />
          </p>
          <p>
            <Skeleton
              baseColor="#1f1f1f4a"
              highlightColor="#1f1f1f4a"
              count={1}
              width={100}
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlayListRowSkeleton;
