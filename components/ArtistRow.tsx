import React from "react";
import styles from "../styles/artists.module.css";

interface props {
  title: string;
  artists: any;
}

const ArtistRow: React.FC<props> = ({ title, artists }) => {
  return (
    <div className={styles.artistContainer}>
      <h3>{title}</h3>
      <div className={styles.artistsRow}>
        {artists.map((item: any) => {
          return (
            <div className={styles.artistItem}>
              <img src={`${item?.images[0]?.url}`} />
              <h4>{item?.name}</h4>
              <p>Artist</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistRow;
