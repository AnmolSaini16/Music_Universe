import { signOut, useSession } from "next-auth/react";
import React from "react";
import styles from "../styles/navbar.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menu, MenuItem } from "@mui/material";

interface props {
  showHeader: boolean;
}

const Navbar: React.FC<props> = ({ showHeader }) => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCurrentStatus = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return `Good morning, ${session?.user.name || "......"}`;
    }
    if (currentTime >= 12 && currentTime < 17) {
      return `Good afternoon, ${session?.user.name || "......"}`;
    }
    return `Good evening, ${session?.user.name || "......"}`;
  };

  return (
    <>
      <div className={styles.navbar}>
        {showHeader ? (
          <h1 className={styles.header}>{getCurrentStatus()}</h1>
        ) : (
          <h1></h1>
        )}
        <button className={styles.emailDropdownButton} onClick={handleClick}>
          {/* @ts-ignore */}
          <img src={session?.user.image} />
          <p>{session?.user.email}</p>
          <IoMdArrowDropdown style={{ fontSize: "1.4rem" }} />
        </button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => signOut({ callbackUrl: window.location.origin })}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
