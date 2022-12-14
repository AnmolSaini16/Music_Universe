import React from "react";
import { useQuery } from "react-query";
import { _getCategories } from "../api";
import CategoriesRow from "./categories/CategoriesRow";
import PlayListRowSkeleton from "./skeleton/PlayListRowSkeleton";

interface props {
  searchPage: boolean;
}

const BrowsePage: React.FC<props> = ({ searchPage }) => {
  const { data: categoriesData, isLoading } = useQuery(
    ["getAllCategory", "categoiriesData"],
    async () => await _getCategories(searchPage ? 14 : 40)
  );
  const allCategories = categoriesData?.data;
  return (
    <>
      {isLoading ? (
        <PlayListRowSkeleton skeletonLength={14} />
      ) : (
        <CategoriesRow
          title=""
          categories={allCategories?.categories?.items}
          flexWrap={true}
        />
      )}
    </>
  );
};

export default BrowsePage;
