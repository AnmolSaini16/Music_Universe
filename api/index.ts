import axios from "axios";
import { getSession } from "next-auth/react";

const getToken = async () => {
  const session = await getSession();
  return session?.accessToken;
};

/////Index page API's///////
export const _featuredPlayLists = async (token: string) => {
  const data = await axios.get(
    `https://api.spotify.com/v1/browse/featured-playlists?country=IN&locale=sv_SE&timestamp=2014-10-23T09%3A00%3A00.000Z&limit=20&offset=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const _getCategories = async (token: string, limit: number) => {
  return await axios.get(
    `https://api.spotify.com/v1/browse/categories?country=IN&locale=sv_SE&limit=${limit}&offset=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const _currentUserPlayList = async (token: string) => {
  const data = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
///////Index Page API's End////////

export const _getPlayListTracks = async (
  params: string | string[] | undefined
) => {
  const token = await getToken();
  return await axios.get(`https://api.spotify.com/v1/playlists/${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const _getCategoriesPlayList = async (params: string) => {
  const token = await getToken();
  const data = await axios.get(
    `https://api.spotify.com/v1/browse/categories/${params}/playlists?country=IN&limit=24&offset=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const _getSearchResults = async (params: string | null) => {
  const token = await getToken();
  const data = await axios.get(
    `https://api.spotify.com/v1/search?q=${params}&type=track%2Cartist%2Cplaylist&market=ES&limit=7&offset=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
