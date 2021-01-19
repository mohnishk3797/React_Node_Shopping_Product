import React from 'react';
import { Pagination } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
export function PaginationAtom({
  variant,
  color,
  shape,
  size,
  count,
  onPageChange,
}) {
  return (
    <Grid item xs={12} style={{ display: 'flex', margin: 20 }} justify='center'>
      <Pagination
        count={count}
        variant={variant || 'outlined'}
        shape={shape || 'rounded'}
        color={color || 'primary'}
        size={size || 'large'}
        onChange={(e, v) => onPageChange(v)}
      />
    </Grid>
  );
}
