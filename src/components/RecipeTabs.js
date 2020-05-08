import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Tabs, Tab, Box, Divider } from '@material-ui/core';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  ingredient:{
    marginBottom: 10,
    marginTop: 10
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={`tab-panel-${index}`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function RecipeTabs({ steps, ingredients }) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper variant='outlined' className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='fullWidth'
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab icon={<AssignmentOutlinedIcon />} label='Ingrédients' />
        <Tab icon={<FormatListNumberedOutlinedIcon />} label='Étapes' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={classes.list}>
          {ingredients.map((ingredient, i) => (
            <div key={i}>
              <Typography className={classes.ingredient}>
                {ingredient.value} {ingredient.unit ? `${ingredient.unit} de` : ''} {ingredient.name}
              </Typography>
              <Divider />
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {steps.map((step, i) => (
          <div key={i}>
            <Typography variant='h6'>Étape {i + 1}</Typography>
            <Typography>{step}</Typography>
            <br />
          </div>
        ))}
      </TabPanel>
    </Paper>
  );
}
