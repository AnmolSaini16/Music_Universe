import { Grid } from "@mui/material";
import React from "react";
import { _getPlayListTracks } from "../../api";
import Navbar from "../../components/Navbar";
import PlayListItem from "../../components/playList/PlayListItem";
import styles from "../../styles/gridHeader.module.css";
import { CgTimer } from "react-icons/cg";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import PlayListItemSkeleton from "../../components/skeleton/PlayListItemSkeleton";

const PlayListItemPage: React.FC = () => {
  const router = useRouter();
  const params = router.query.id;

  const { data: playList, isLoading } = useQuery(
    ["getPlayListsData", router.query],
    () => _getPlayListTracks(params),
    {
      refetchInterval: Infinity,
    }
  );

  const playListData = playList?.data;
  return (
    <>
      <Navbar showHeader={false} />
      {isLoading ? (
        <PlayListItemSkeleton />
      ) : (
        <>
          <div className={styles.heading}>
            <img src={playListData.images[0].url} />
            <div className={styles.headingRight}>
              <h5>PLAYLIST</h5>
              <h1>{playListData.name}</h1>
              <p>{playListData.description}</p>
              <p>
                {playListData.owner.display_name} ●{" "}
                {playListData.tracks.items.length + " songs"} ●{" "}
                {playListData.followers.total.toLocaleString() + " followers"}
              </p>
            </div>
          </div>

          <Grid
            container
            style={{ padding: "10px" }}
            direction="row"
            alignItems="center"
            className={styles.gridHeader}
          >
            <Grid item style={{ width: "105px" }}>
              <p>#</p>
            </Grid>

            <Grid item></Grid>

            <Grid item xs={5}>
              <p>TITLE</p>
            </Grid>

            <Grid item xs={4}>
              <p>ALBUM</p>
            </Grid>
            <Grid item xs={1}>
              <CgTimer style={{ fontSize: "1.4rem" }} />
            </Grid>
          </Grid>

          <hr className={styles.headerLine} />

          {playListData?.tracks?.items?.map((item: any, index: number) => (
            <PlayListItem
              playListItem={item}
              key={item?.track?.name}
              index={index + 1}
            />
          ))}
        </>
      )}
    </>
  );
};

export default PlayListItemPage;
