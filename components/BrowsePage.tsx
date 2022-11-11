import { useSession } from "next-auth/react";
import React from "react";
import { useQuery } from "react-query";
import { _getCategories } from "../api";
import CategoriesRow from "./categories/CategoriesRow";
import PlayListRowSkeleton from "./skeleton/PlayListRowSkeleton";

const BrowsePage = () => {
  const { data: session } = useSession();
  const { data: categoriesData, isLoading } = useQuery(
    ["getAllCategory", "categoiriesData"],
    async () => await _getCategories(session?.accessToken as string, 20)
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
