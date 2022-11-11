import React from "react";
import ArtistRow from "./ArtistRow";
import PlaylistsRow from "./playList/PlaylistsRow";
import TracksRow from "./TracksRow";

interface props {
  searchResults: any;
}

const SeachPage: React.FC<props> = ({ searchResults }) => {
  return (
    <>
      {!searchResults.artists.items.length ||
      !searchResults.playlists.items.length ? (
        <h1>Oops, No results found</h1>
      ) : (
        <>
          <TracksRow title="Songs" tracks={searchResults.tracks.items} />
          <PlaylistsRow
            title="Playlists"
            data={searchResults.playlists.items}
            flexWrap={true}
          />
          <ArtistRow title="Artists" artists={searchResults.artists.items} />
        </>
      )}
    </>
  );
};

export default SeachPage;
