import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BsSearch } from "react-icons/bs";
import styles from "../styles/searchPage.module.css";
import { _getSearchResults } from "../api";
import { useMutation } from "react-query";
import PlayListRowSkeleton from "../components/skeleton/PlayListRowSkeleton";
import SeachPage from "../components/SeachPage";
import BrowsePage from "../components/BrowsePage";

const searchPage = () => {
  const [searchString, setSerchString] = useState<string | null>("");
  const [timer, setTimer] = useState<number | undefined>();
  const [loader, setLoader] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(true);

  const mutation = useMutation(
    async () => await _getSearchResults(searchString)
  );

  const handleChange = (e: any) => {
    e.preventDefault;
    setShowCategories(false);
    setLoader(true);
    setSerchString(e.target.value);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      /* @ts-ignore */
      mutation.mutate(searchString);
      setLoader(false);
    }, 500);
    /* @ts-ignore */
    setTimer(newTimer);
  };

  useEffect(() => {
    if (!searchString?.length) {
      setShowCategories(true);
    }
  }, [searchString]);

  const searchResults = mutation?.data?.data;
  return (
    <>
      <Navbar showHeader={false} />
      <div className={styles.searchInput}>
        <BsSearch style={{ fontSize: "1.5rem", color: "black" }} />
        <input
          onChange={handleChange}
          placeholder="What do you want to listen to?"
        />
      </div>

      {showCategories && (
        <div>
          <h1>Browse Categories</h1>
          <BrowsePage />
        </div>
      )}

      <div>
        {loader || mutation.isLoading ? (
          <PlayListRowSkeleton skeletonLength={14} />
        ) : (
          mutation.isSuccess && (
            <>
              <SeachPage searchResults={searchResults} />
            </>
          )
        )}
      </div>
    </>
  );
};

export default searchPage;
