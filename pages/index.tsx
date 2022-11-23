import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import {
  _currentUserPlayList,
  _featuredPlayLists,
  _getCategories,
} from "../api";
import CategoriesRow from "../components/categories/CategoriesRow";
import Navbar from "../components/Navbar";
import PlaylistsRow from "../components/playList/PlaylistsRow";
import { useQuery } from "react-query";
import PlayListRowSkeleton from "../components/skeleton/PlayListRowSkeleton";

const HomePage: React.FC = () => {
  const { data: featuredPlaylistsData, isLoading: featuredPlaylistsLoading } =
    useQuery(["getFeaturedPlayList"], async () => await _featuredPlayLists(), {
      refetchInterval: Infinity,
    });

  const {
    data: currentUserPlayListData,
    isLoading: currentUserPlayListLoading,
  } = useQuery(
    ["getcurrentUserPlayList"],
    async () => await _currentUserPlayList()
  );

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery(
    ["getCategories"],
    async () => await _getCategories(14)
  );

  const featuredPlaylists = featuredPlaylistsData?.data;
  const currentUserPlayList = currentUserPlayListData?.data;
  const categories = categoriesData?.data;
  return (
    <>
      <Navbar showHeader={true} />

      {featuredPlaylistsLoading ? (
        <PlayListRowSkeleton skeletonLength={7} />
      ) : (
        <PlaylistsRow
          title="Featured Playlists"
          data={featuredPlaylists.playlists.items}
          flexWrap={false}
        />
      )}
      {categoriesLoading ? (
        <PlayListRowSkeleton skeletonLength={7} />
      ) : (
        <CategoriesRow
          title="Browse Categories"
          categories={categories.categories.items}
          flexWrap={true}
        />
      )}

      {currentUserPlayListLoading ? (
        <PlayListRowSkeleton skeletonLength={7} />
      ) : (
        <PlaylistsRow
          title="Your Playlists"
          data={currentUserPlayList.items}
          flexWrap={false}
        />
      )}
    </>
  );
};

export default HomePage;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({ req: context.req });
  if (!session?.user || session.error === "RefreshAccessTokenError") {
    console.log("no user");
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
