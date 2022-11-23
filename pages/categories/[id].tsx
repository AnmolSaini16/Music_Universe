import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { _getCategoriesPlayList } from "../../api";
import Navbar from "../../components/Navbar";
import PlaylistsRow from "../../components/playList/PlaylistsRow";
import PlayListRowSkeleton from "../../components/skeleton/PlayListRowSkeleton";

const CategoryPlayList = () => {
  const router = useRouter();
  const params = router.query.id;
  const { data: playlists, isLoading } = useQuery(
    ["getCategoryPlayLists", router.query],
    async () => await _getCategoriesPlayList(params as string),
    {
      refetchInterval: Infinity,
    }
  );
  const playListItems = playlists?.data;
  return (
    <>
      <Navbar showHeader={false} />
      {isLoading ? (
        <PlayListRowSkeleton skeletonLength={14} />
      ) : (
        <PlaylistsRow
          title="Featured Playlists"
          data={playListItems?.playlists?.items}
          flexWrap={true}
        />
      )}
    </>
  );
};

export default CategoryPlayList;
