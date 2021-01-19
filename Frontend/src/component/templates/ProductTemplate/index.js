import React from 'react';
import Container from '@material-ui/core/Container';
import {
  ProductListMolecule,
  ProductFilter,
  ProductUpdateDialog,
} from '../../molecules';
import { PaginationAtom } from '../../atoms';
export function ProductTemplate({ open, setOpen, classes }) {
  return (
    <Container>
      <ProductUpdateDialog open={open} handleClose={() => setOpen(false)} />
      <ProductFilter handleOpenEdit={setOpen} />
      <ProductListMolecule
        data={[{}, {}]}
        classes={classes}
        handleOpenEdit={setOpen}
      />
      <PaginationAtom count={10} />
    </Container>
  );
}
