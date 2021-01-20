import React from 'react';
import Container from '@material-ui/core/Container';
import {
  ProductListMolecule,
  ProductFilter,
  ProductUpdateDialog,
} from '../../molecules';
import { PaginationAtom } from '../../atoms';
export function ProductTemplate({
  open,
  setOpen,
  classes,
  product,
  onPageChange,
  onFilterChange,
  filterOption,
  name,
  setName,
  price,
  setPrice,
  changeMedia,
  addProduct,
  actionType,
  setActionType,
  error,
  deleteProduct,
  setEditValue,
  mediaLink,
  updateProduct,
}) {
  return (
    <Container>
      <ProductUpdateDialog
        name={name}
        action={actionType === 'add' ? addProduct : updateProduct}
        actionType={actionType}
        setName={setName}
        price={price}
        setPrice={setPrice}
        changeMedia={changeMedia}
        open={open}
        handleClose={() => setOpen(false)}
        error={error}
        mediaLink={mediaLink}
      />
      <ProductFilter
        filterOption={filterOption}
        onFilterChange={onFilterChange}
        handleOpenEdit={setOpen}
        setActionType={setActionType}
      />
      <ProductListMolecule
        data={product?.docs}
        classes={classes}
        handleOpenEdit={setOpen}
        deleteProduct={deleteProduct}
        setEditValue={setEditValue}
      />
      {product?.docs.length ? (
        <PaginationAtom onPageChange={onPageChange} count={product.pages} />
      ) : null}
    </Container>
  );
}
