import React from 'react';
import { Avatar, Typography, Link, makeStyles } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

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

export default function Author({ author }) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <CopyrightIcon style={{ fontSize: 12 }} /> 
      <Avatar src={author.avatar} alt={author.name} className={classes.small}/>
      <Typography variant='caption' className={classes.label}>
        {author.name} (<Link href={'https://www.instagram.com/' + author.instagram} onClick={preventDefault}>@{author.instagram}</Link>)
      </Typography>
    </div>
  );
}
