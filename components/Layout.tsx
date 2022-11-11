import { Grid } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";
import styles from "../styles/HomePage.module.css";

interface props {
  children: any;
}

const generateHomePageBackGround = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const randomBG = items[Math.floor(Math.random() * items.length)];

  switch (randomBG) {
    case 1:
      return "linear-gradient(180deg, rgba(30,15,67,1) 0%, rgba(24,15,43,1) 31%, rgba(18,18,18,1) 84%)";

    case 2:
      return "linear-gradient(180deg, rgba(78,18,50,1) 0%, rgba(39,12,26,1) 31%, rgba(18,18,18,1) 84%)";

    case 3:
      return "linear-gradient(180deg, rgba(169,30,14,1) 0%, rgba(77,18,12,1) 31%, rgba(18,18,18,1) 84%)";

    case 4:
      return "linear-gradient(180deg, rgba(99,55,47,1) 0%, rgba(38,22,19,1) 48%, rgba(18,18,18,1) 89%)";

    case 5:
      return "background: linear-gradient(180deg, rgba(24,182,21,1) 0%, rgba(18,72,16,1) 48%, rgba(18,18,18,1) 89%)";

    case 6:
      return "background: linear-gradient(180deg, rgba(243,158,45,1) 0%, rgba(80,54,20,1) 48%, rgba(18,18,18,1) 89%)";

    case 7:
      return "background: linear-gradient(180deg, rgba(156,28,39,1) 0%, rgba(61,15,18,1) 48%, rgba(18,18,18,1) 89%)";
  }
  return "linear-gradient(180deg, rgba(30,15,67,1) 0%, rgba(24,15,43,1) 31%, rgba(18,18,18,1) 84%)";
};

const Layout: React.FC<props> = ({ children }) => {
  return (
    <>
      <div className={styles.sidebar}>
        <SideBar />
      </div>

      <div
        className={styles.homepage}
        style={{ background: generateHomePageBackGround() }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
