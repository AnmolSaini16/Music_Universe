import React from "react";
import { RiTimer2Line } from "react-icons/ri";
import { millisToMinutesAndSeconds } from "../constants/utils";
import styles from "../styles/tracksRow.module.css";

interface props {
  title: string;
  tracks: any;
}
const TracksRow: React.FC<props> = ({ title, tracks }) => {
  return (
    <div className={styles.tracksContainer}>
      <h3>{title}</h3>
      <div className={styles.tracksRow}>
        {tracks.map((item: any) => (
          <div className={styles.trackItem}>
            <img src={item.album.images[0]?.url} />
            <h4>{item.name}</h4>
            <p>{item.artists[0]?.name}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.8rem",
                color: "#989B9E",
                lineHeight: "20px",
              }}
            >
              <span>
                <RiTimer2Line style={{ paddingRight: "5px" }} />
              </span>
              {millisToMinutesAndSeconds(item.duration_ms)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TracksRow;
