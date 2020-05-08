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
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
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
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
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
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  }
}));

export default function RecipesList() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
    {
      recipes.map((recipe, index) => {
        const dataId = recipe.name.split(' ').join('-');
        return (<ExpansionPanel
          key={index}
          square
          expanded={expanded === dataId}
          onChange={handleChange(dataId)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            id={dataId+'-header'}
          >
            <Typography className={classes.heading}>
              {recipe.name}
            </Typography>

            <Taste numberOfStars={recipe.stars} className={classes.secondaryHeading}/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <RecipeItem recipe={recipe} />
          </ExpansionPanelDetails>
        </ExpansionPanel>);
      })
    }
    </div>
  );
}
