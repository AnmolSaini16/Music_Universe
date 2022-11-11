import { Grid } from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import styles from "../../styles/loginPage.module.css";

const loginPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styles.loginPage}
    >
      <Image
        src="/icons/spotify-logo.png"
        alt="Spotify logo"
        width="150"
        height="150"
      />

      <button
        onClick={() =>
          signIn("spotify", { callbackUrl: window.location.origin })
        }
        className={styles.loginButton}
      >
        Login with your spotify account
      </button>
    </Grid>
  );
};

export default loginPage;
