import React from 'react';
import { Grid } from '@material-ui/core';
import { DropDownInput, ButtonInput } from '../../atoms';
let sortByOption = [
  {
    val: 'price_asc',
    item: 'Price -> Low To High',
  },
  {
    val: 'price_dec',
    item: 'Price -> High To Low',
  },
  {
    val: 'name_asc',
    item: 'Name -> A to Z',
  },
  {
    val: 'name_dec',
    item: 'Name -> Z to A',
  },
];
export function ProductFilter({ sortBy, handleOpenEdit }) {
  return (
    <Grid container justify='space-around' xs={12} sm={12} md={12} lg={12}>
      <Grid item xs={12} sm={5} md={6} lg={7}>
        <DropDownInput
          value={sortBy || ''}
          onChange={(value) => console.log(value)}
          label={'Sort By'}
          name={'sortBy'}
          options={sortByOption}
          error={false}
          errorText={false}
          fullWidth={true}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <ButtonInput
          type={'button'}
          fullWidth={true}
          color={'primary'}
          onClick={() => handleOpenEdit(true)}
          inlineStyle={{
            marginTop: 10,
            padding: 14,
          }}
          size={'large'}
          content={'Add New Product'}
          variant={'contained'}
        />
      </Grid>
    </Grid>
  );
}
