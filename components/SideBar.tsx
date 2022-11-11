import { Grid } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/sidebar.module.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Link href="/">
        <p className={styles.sidebarIcons}>
          <span>
            <BiHomeAlt style={{ fontSize: "1.5rem", paddingRight: "6px" }} />
          </span>
          {"   "}
          Home
        </p>
      </Link>

      <Link href="/search">
        <p className={styles.sidebarIcons}>
          <span>
            <BsSearch style={{ fontSize: "1.5rem", paddingRight: "6px" }} />
          </span>
          {"   "}
          Search
        </p>
      </Link>
      <Link href="/browse">
        <p className={styles.sidebarIcons}>
          <span>
            <VscLibrary style={{ fontSize: "1.5rem", paddingRight: "6px" }} />
          </span>
          {"   "}
          Browse All
        </p>
      </Link>
      <hr className={styles.sidebarLine} />
    </div>
  );
};

export default SideBar;
