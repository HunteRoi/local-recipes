import React from 'react';
import { Avatar, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto'
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

export default function Author({ author: { avatarURL, name, instagramName } }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Recette par 
      <Avatar src={avatarURL} alt={name} className={classes.small} aria-label='recipe author picture'/>
      <Typography variant='caption' className={classes.label} aria-label='recipe author name'>
        {name} (<Link href={`https://www.instagram.com/${instagramName}`} aria-label='instagram name'>@{instagramName}</Link>)
      </Typography>
    </div>
  );
}
