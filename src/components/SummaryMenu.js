import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ScheduleIcon from '@material-ui/icons/Schedule';

export default function SummaryMenu({
  serving,
  totalDuration,
  cookingDuration
}) {
  return (
    <Grid container spacing={6} justify='center'>
      <Grid item>
        <Typography>
          <PersonIcon /> {serving} Pers.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <ScheduleIcon /> {totalDuration} min
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <img
            src='https://img.icons8.com/material/24/000000/cooking-pot.png'
            alt=''
          />{' '}
          {cookingDuration} min.
        </Typography>
      </Grid>
    </Grid>
  );
}
