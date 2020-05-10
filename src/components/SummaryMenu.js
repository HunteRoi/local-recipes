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
        <Typography aria-label='serving'>
          <PersonIcon /> {serving.value} {serving.unit}
        </Typography>
      </Grid>
      <Grid item>
        <Typography aria-label='total duration'>
          <ScheduleIcon /> {totalDuration} min
        </Typography>
      </Grid>
      <Grid item>
        <Typography aria-label='cooking duration'>
          <img src='cooking-pot.png' alt='' /> {cookingDuration} min.
        </Typography>
      </Grid>
    </Grid>
  );
}
