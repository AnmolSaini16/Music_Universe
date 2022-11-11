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

interface props {
  featuredPlaylists: any;
  currentUserPlayList: any;
  categories: any;
}

const HomePage: React.FC<props> = (props) => {
  const { featuredPlaylists, currentUserPlayList, categories } = props;

  return (
    <>
      <Navbar showHeader={true} />

      <PlaylistsRow
        title="Featured Playlists"
        data={featuredPlaylists.playlists.items}
        flexWrap={false}
      />

      <CategoriesRow
        title="Browse Categories"
        categories={categories.categories.items}
        flexWrap={true}
      />

      <PlaylistsRow
        title="Your Playlists"
        data={currentUserPlayList.items}
        flexWrap={false}
      />
    </>
  );
};

export default HomePage;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const session = await getSession({ req: context.req });
    if (!session?.user || session.error === "RefreshAccessTokenError") {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
    }
    const featuredplaylists = await _featuredPlayLists(
      session?.accessToken as string
    );

    const currentUserPlayList = await _currentUserPlayList(
      session?.accessToken as string
    );

    const getServeralCategories = await _getCategories(
      session?.accessToken as string,
      7
    );

    return {
      props: {
        featuredPlaylists: featuredplaylists.data,
        currentUserPlayList: currentUserPlayList.data,
        categories: getServeralCategories.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
}
