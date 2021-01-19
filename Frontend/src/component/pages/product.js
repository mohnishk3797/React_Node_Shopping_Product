import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ProductTemplate } from '../templates';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  card: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 300,
    minWidth: 300,
  },
  media: {
    height: 140,
  },
  'MuiPagination-ul': {
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Product() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return <ProductTemplate open={open} setOpen={setOpen} classes={classes} />;
}
