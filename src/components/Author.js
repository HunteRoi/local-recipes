import React from "react";
import { Avatar, Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
  },
  label: {
    marginLeft: theme.spacing(0.5),
  },
  small: {
    marginLeft: theme.spacing(1),
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function SocialMediaLink({ username, profileURL }) {
  return profileURL && username ? (
    <>
      (
      <Link href={profileURL} aria-label="social network name">
        @{username}
      </Link>
      )
    </>
  ) : (
    <></>
  );
}

export default function Author({ author: { name, socialMedia } }) {
  const classes = useStyles();
  const [profilePictureURL] = React.useState(
    socialMedia ? socialMedia.profilePictureURL || "" : ""
  );

  return (
    <div className={classes.root}>
      Recette par
      <Avatar
        src={profilePictureURL}
        alt={name}
        className={classes.small}
        aria-label="recipe author picture"
      />
      <Typography
        variant="caption"
        className={classes.label}
        aria-label="recipe author name"
      >
        {name} <SocialMediaLink {...socialMedia} />
      </Typography>
    </div>
  );
}
