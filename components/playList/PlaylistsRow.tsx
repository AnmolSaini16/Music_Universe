import Link from "next/link";
import React from "react";
import { generateShortName } from "../../constants/utils";
import styles from "../../styles/playlistRow.module.css";

interface props {
  data: any;
  title: string;
  flexWrap: boolean;
}

const PlaylistsRow: React.FC<props> = (props) => {
  const { data, title, flexWrap } = props;
  return (
    <div className={styles.playListContainer}>
      <h3>{title}</h3>
      <div
        className={styles.playListRow}
        style={flexWrap ? { flexWrap: "wrap" } : {}}
      >
        {data.map((item: any) => {
          return (
            <Link href={`/playlist/${item?.id}`} key={item?.id}>
              <div className={styles.playListItem}>
                <img src={`${item?.images[0].url}`} />
                <h4>{generateShortName(item?.name, 17)}</h4>
                <p>{generateShortName(item?.description, 45)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistsRow;
