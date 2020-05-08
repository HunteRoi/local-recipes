import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Container, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RecipesList from './components/RecipesList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  avatarLabel: {
    marginLeft: theme.spacing(1)
  },
  lastUpdated: {
    marginLeft: theme.spacing(0.5),
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography variant='h2'>Mes Recettes Maison</Typography>

        <div className={classes.root}>
          <Avatar alt='Tinaël Devresse' src='me.jpg' />
          <Typography className={classes.avatarLabel}>Tinaël Devresse</Typography>
          <Typography className={classes.lastUpdated}>- Mis à jour le 08-05-2020</Typography>
        </div>

        <RecipesList />
      </Container>
    </React.Fragment>
  );
}

export default App;
