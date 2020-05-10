import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import SummaryMenu from './SummaryMenu';
import RecipeTabs from './RecipeTabs';
import Author from './Author';

const useStyles = makeStyles((theme) => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 480,
    borderRadius: '5%',
    marginBottom: theme.spacing(1.5)
  },
  section1: {
    margin: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  }
}));

export default function RecipeItem({ recipe }) {
  if (recipe == null) throw new Error('Recipe cannot be undefined');

  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.section1}>
        <img className={classes.img} src={recipe.imageURL} alt={recipe.name} />
        <Author {...recipe} />
      </div>
      <div className={classes.section2}>
        <SummaryMenu {...recipe} />
      </div>
      <div className={classes.section3}>
        <RecipeTabs {...recipe} />
      </div>
    </Container>
  );
}
