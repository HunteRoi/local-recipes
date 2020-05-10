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
    marginBottom: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  avatarLabel: {
    marginLeft: theme.spacing(1),
  },
  lastUpdated: {
    marginLeft: theme.spacing(0.5),
    color: theme.palette.text.secondary,
  },
  description: {
    marginBottom: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [name, setName] = React.useState('Tinaël Devresse');
  const [profilePic, setProfilePic] = React.useState('me.jpg');
  
  React.useLayoutEffect(() => {
    fetch(`https://www.instagram.com/titidevresse/?__a=1`)
      .then((r) => r.json())
      .then((o) => {
        setProfilePic(o.graphql.user.profile_pic_url_hd);
        setName(o.graphql.user.full_name);
      })
      .catch(console.error);
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography variant='h2'>Mes Recettes Maison</Typography>

        <div className={classes.root}>
          <Avatar
            alt={name}
            src={profilePic}
            aria-label='author picture'
          />
          <Typography className={classes.avatarLabel} aria-label='author name'>
            {name}
          </Typography>
          <Typography
            className={classes.lastUpdated}
            aria-label='page last modified date'
          >
            - Mis à jour le 10-05-2020
          </Typography>
        </div>

        <Typography aria-label='description' className={classes.description}>
          Ce site rassemble les quelques recettes que j'ai réalisées durant ma
          courte vie, en apportant quelques informations supplémentaires comme
          un rating basé sur mes goûts ainsi que les personnes qui m'ont fait
          découvrir chacun de ces merveilles culinaires. Merci à elles!
        </Typography>

        <RecipesList />
      </Container>
    </React.Fragment>
  );
}

export default App;
