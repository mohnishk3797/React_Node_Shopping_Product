import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './headerStyle';

export const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='absolute' color={'default'} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='flex-start'
          ></Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          {props.children ? props.children : null}
        </Container>
      </main>
    </div>
  );
};
