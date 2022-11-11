import React from "react";
import Navbar from "../components/Navbar";
import { _getCategories } from "../api";
import BrowsePage from "../components/BrowsePage";

const browse: React.FC = () => {
  return (
    <>
      <Navbar showHeader={false} />
      <h1>Browse All Categories</h1>
      <BrowsePage />
    </>
  );
};

export default browse;
