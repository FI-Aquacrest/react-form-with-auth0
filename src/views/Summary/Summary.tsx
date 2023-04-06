import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Divider, Grid, Typography } from '@mui/material';

const Summary = () => {
  const formState = useAppSelector((state) => state.form);

  return (
    <>
      <Typography variant="h3" textAlign="center" mb={2}>
        Thank you!
      </Typography>
      <Grid container direction="column">
        <GridItem label="Name" value={formState.name} />
        <Divider />
        <GridItem label="Email" value={formState.email} />
        <Divider />
        <GridItem label="Age" value={formState.age} />
        <Divider />
      </Grid>
    </>
  );
};

const GridItem = (props: { label: string; value: string | number }) => {
  return (
    <Grid item container direction="row">
      <Grid item xs={3}>
        <Typography>
          <b>{props.label}</b>
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography>{props.value}</Typography>
      </Grid>
    </Grid>
  );
};

export default Summary;
