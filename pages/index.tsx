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
    // const session = await getSession({ req: context.req });
    // console.log(session?.accessToken);
    const token =
      "BQDhxur5Hx5lSpqPyxupzSeej2x7vvhpDOKHl0C-VYmcy80P-P-N6cdPokbWQFnG7Yt3TKsJd1DpPkKBNJdanBozuAARqiYUrUwYviXmOIimnNECIn9Ml5Ec90aWPhZbpY41KeSzpdon_L-5QB9ogosV9l4OXRReXTmzBHbc13w1hJLD6pPlYvr0--YWyMpQkFVS5aA";
    // if (!session?.user || session.error === "RefreshAccessTokenError") {
    //   return {
    //     redirect: {
    //       destination: "/auth/login",
    //       permanent: false,
    //     },
    //   };
    // }
    const featuredplaylists = await _featuredPlayLists(token);

    const currentUserPlayList = await _currentUserPlayList(token);

    const getServeralCategories = await _getCategories(token, 14);

    return {
      props: {
        featuredPlaylists: featuredplaylists.data,
        currentUserPlayList: currentUserPlayList.data,
        categories: getServeralCategories.data,
      },
    };
  } catch (error) {
    //@ts-ignore
    console.log("error called", error);
    //@ts-ignore
    if (error.response.status === 401) {
      //// Unauthorised
      // return {
      //   redirect: {
      //     destination: "/auth/login",
      //     permanent: false,
      //   },
      // };
    }
    return {
      props: {},
    };
  }
}
