import Link from "next/link";
import React from "react";
import { generateShortName } from "../../constants/utils";
import styles from "../../styles/playlistRow.module.css";

interface props {
  categories: any;
  title: string;
  flexWrap: boolean;
}

const CategoriesRow: React.FC<props> = ({ categories, title, flexWrap }) => {
  return (
    <div className={styles.playListContainer}>
      <h3>{title}</h3>
      <div
        className={styles.playListRow}
        style={flexWrap ? { flexWrap: "wrap" } : {}}
      >
        {categories.map((item: any) => {
          return (
            <Link href={`/categories/${item.id}`} key={item?.name}>
              <div className={styles.playListItem}>
                <img src={`${item.icons[0].url}`} />
                <h4>{generateShortName(item.name, 20)}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesRow;
