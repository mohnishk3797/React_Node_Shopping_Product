import React from 'react';
import { Grid } from '@material-ui/core';
import { ProductCardAtom } from '../../atoms';
export function ProductListMolecule({ data = [], classes, handleOpenEdit }) {
  return (
    <Grid container className={classes.root} justify='center' spacing={1}>
      {data.map((obj) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductCardAtom
              classes={classes}
              data={obj}
              handleOpenEdit={handleOpenEdit}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
