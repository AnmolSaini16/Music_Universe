import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../../styles/skeleton.module.css";

const PlayListItemSkeleton = () => {
  let length = Array.from(Array(5).keys());
  return (
    <>
      <div className={styles.skeletonItemContaner}>
        <Skeleton
          count={1}
          height={250}
          width={250}
          baseColor="#1f1f1f4a"
          highlightColor="#1f1f1f4a"
        />
        <div className={styles.skeletonItemRight}>
          <p>
            <Skeleton
              baseColor="#1f1f1f4a"
              highlightColor="#1f1f1f4a"
              count={1}
              width={300}
              height={60}
            />
          </p>
          <p>
            <Skeleton
              baseColor="#1f1f1f4a"
              highlightColor="#1f1f1f4a"
              count={1}
              width={200}
              height={20}
            />
          </p>
        </div>
      </div>

      <div>
        <Skeleton
          count={5}
          height={40}
          style={{
            lineHeight: 8,
          }}
          baseColor="#1f1f1f4a"
          highlightColor="#1f1f1f4a"
        />
      </div>
    </>
  );
};

export default PlayListItemSkeleton;
