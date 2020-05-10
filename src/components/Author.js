import React from 'react';
import { Avatar, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
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

export default function Author({ author: { name, socialMedia } }) {
  const classes = useStyles();
  const [profilePictureURL, setProfilePictureURL] = React.useState(socialMedia.profilePictureURL || '');
  const [profileURL, setProfileURL] = React.useState(socialMedia.profileURL || '');
  const [username, setUsername] = React.useState(socialMedia.username || '');

  React.useLayoutEffect(() => {
    if (
      socialMedia &&
      socialMedia.type.toLowerCase() === 'instagram' &&
      socialMedia.username
    ) {
      fetch(`https://www.instagram.com/${socialMedia.username}/?__a=1`)
        .then((r) => r.json())
        .then((o) => {
          setProfilePictureURL(o.graphql.user.profile_pic_url_hd);
          setProfileURL(`https://instagram.com/${socialMedia.username}`);
          setUsername(o.graphql.user.full_name);
        })
        .catch(console.error);
    }
  });

  return (
    <div className={classes.root}>
      Recette par
      <Avatar
        src={profilePictureURL}
        alt={name}
        className={classes.small}
        aria-label='recipe author picture'
      />
      <Typography
        variant='caption'
        className={classes.label}
        aria-label='recipe author name'
      >
        {name} (
        <Link href={profileURL} aria-label='social network name'>
          @{username}
        </Link>
        )
      </Typography>
    </div>
  );
}
