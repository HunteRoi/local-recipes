import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import RecipeItem from './RecipeItem';
import Taste from './Taste';
import recipes from '../data/recipes.json';

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      borderBottom: '1px solid rgba(0, 0, 0, .125)'
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    marginBottom: 10
  },
  expanded: {},
})(MuiExpansionPanel);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  column: { 
    flexBasis: '33.33%'
  },
  secondaryHeading: {
    marginLeft: theme.spacing(3),
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function RecipesList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {recipes.map((recipe, index) => {
        const dataId = recipe.name.split(' ').join('-');
        return (
          <ExpansionPanel
            key={index}
            square
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              id={dataId + '-header'}
            >
              <Typography className={classes.heading}>{recipe.name}</Typography>

              <div className={classes.column}>
                <div className={classes.secondaryHeading}>
                  <Taste numberOfStars={recipe.stars} />
                </div>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RecipeItem recipe={recipe} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
}
