import React from "react";
import styles from "../../styles/playlistpopup.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

interface props {
  playListItem: any;
  handleClose: () => void;
}
const PlayListPopup: React.FC<props> = ({ playListItem, handleClose }) => {
  console.log(playListItem);

  function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="#989B9E"
            fontSize={"1.2rem"}
          >{`💚`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <div className={styles.popupContainerBG} onClick={handleClose} />
      <div className={styles.centered}>
        <div className={styles.popUp}>
          <CloseIcon onClick={handleClose} className={styles.closeIcon} />
          <img src={playListItem.track.album.images[0]?.url} />
          <div className={styles.playListPopupRight}>
            <h2 className={styles.trackName}>{playListItem.track.name}</h2>
            <div className={styles.playListPopupArtitst}>
              {playListItem.track.artists.map((item: any) => {
                return (
                  <span className={styles.comma} key={item?.name}>
                    {item.name}{" "}
                  </span>
                );
              })}
            </div>
            <p> {playListItem.track.album.name || "-"}</p>
            <div style={{ color: "#1BD760" }}>
              <CircularProgressWithLabel
                value={playListItem.track.popularity}
                color="inherit"
                size={"3.3rem"}
              />
            </div>
            <a
              href={playListItem.track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play it on Spotify
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayListPopup;
