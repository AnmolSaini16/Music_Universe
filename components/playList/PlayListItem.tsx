import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { millisToMinutesAndSeconds } from "../../constants/utils";
import styles from "../../styles/playListItem.module.css";
import PlayListPopup from "./PlayListPopup";

interface props {
  playListItem: any;
  index: number;
}

const PlayListItem: React.FC<props> = ({ playListItem, index }) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const handleRowClick = () => {
    setOpenPopup(true);
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    if (openPopup && document.body.style.overflow !== "hidden")
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
  }, [openPopup]);

  return (
    <>
      <Grid
        container
        className={styles.playListItem}
        direction="row"
        alignItems="center"
        onClick={handleRowClick}
      >
        <Grid
          item
          className={styles.playListNumber}
          style={{ color: "#989B9E" }}
        >
          <p>{index}</p>
        </Grid>
        <Grid item>
          <img
            src={playListItem.track.album.images[0]?.url}
            className={styles.playListImage}
          />
        </Grid>
        <Grid item xs={5}>
          <p className={styles.trackName}>{playListItem.track.name}</p>
          <div className={styles.playListSingers}>
            {playListItem.track.artists.map((item: any) => {
              return (
                <span key={item.name} className={styles.comma}>
                  {item.name}
                </span>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={4} style={{ color: "#989B9E", fontSize: "0.9rem" }}>
          <p>{playListItem.track.album.name}</p>
        </Grid>
        <Grid item xs={1} style={{ color: "#989B9E", fontSize: "0.9rem" }}>
          <p>{millisToMinutesAndSeconds(playListItem.track.duration_ms)}</p>
        </Grid>
      </Grid>

      {openPopup && (
        <PlayListPopup playListItem={playListItem} handleClose={handleClose} />
      )}
    </>
  );
};

export default PlayListItem;
