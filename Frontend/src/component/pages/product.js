import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ProductTemplate } from '../templates';
import API from '../../redux/services';
import { useSelector, useDispatch } from 'react-redux';
import { setProductData } from '../../redux/actions';
import { Toast } from '../../utils/toast';
import Swal from 'sweetalert2';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  card: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 250,
    minWidth: 250,
  },
  media: {
    height: 250,
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
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [media, setMedia] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [mediaLink, setmediaLink] = useState(null);
  const [editID, setEditID] = useState(null);
  const [error, setError] = useState({});
  useEffect(() => {
    getProducts();
  }, [page, sort]);
  const getProducts = (sub = 0) => {
    let query = `?page=${page - sub}`;
    if (sort) query += `&sort=${sort}`;
    API.product
      .getProducts(query)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((products) => {
            dispatch(setProductData(products));
          });
        }
      })
      .catch(() => {
        Toast.fire({
          icon: 'error',
          title: 'Something Went Wrong!',
        });
      });
  };
  const handleChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    setMedia(file);
  };
  const clean = () => {
    setName('');
    setPrice('');
    setMedia(null);
  };
  const getErrorDoc = (error) => {
    setError(error);
    const keys = Object.keys(error).filter((k) => error[k]);
    if (keys.length) return false;
    return true;
  };
  const validation = () => {
    let error = {};
    switch (actionType) {
      case 'add':
        error.name = !name.length && 'Product Name Required.';
        error.price = !price.length && 'Product Price Required.';
        error.media = !media && 'Product Image Required.';
        return getErrorDoc(error);
      case 'update':
        error.name = !name.length && 'Product Name Required.';
        error.price = !price.length && 'Product Price Required.';
        return getErrorDoc(error);
      default:
        return true;
    }
  };
  const handleAddNewProduct = () => {
    if (!validation()) return false;
    const data = new FormData();
    data.append('name', name);
    data.append('price', price);
    data.append('media', media);
    API.product
      .addProducts(data)
      .then((res) => {
        if (res.status === 200) {
          getProducts();
          Toast.fire({
            icon: 'success',
            title: 'Product Added Successfully!',
          });
          setActionType(null);
          setOpen(false);
          clean();
        }
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: 'Something Went Wrong!',
        });
      });
  };
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: 'Are you sure to delete this product ?',
      showCancelButton: true,
      confirmButtonText: `Sure`,
    }).then((result) => {
      if (result.isConfirmed) {
        API.product.deleteProducts(id).then((res) => {
          if (res.status === 200) {
            console.log(product.docs.length, page);
            if (product.docs.length === 1 && page > 1) {
              setPage(page - 1);
              getProducts(1);
            } else {
              getProducts();
            }

            Swal.fire('Deleted Successfully!', '', 'success');
          }
        });
      } else {
        Swal.fire('Your Product is safe', '', 'info');
      }
    });
  };
  const setEditValue = (data) => {
    setName(data.name);
    setPrice(data.price);
    setmediaLink(data.media);
    setEditID(data._id);
    setActionType('update');
  };
  const handleUpdateProduct = () => {
    if (!validation()) return false;
    const data = new FormData();
    data.append('name', name);
    data.append('price', price);
    if (media) data.append('media', media);

    API.product.updateProduct(editID, data).then((res) => {
      if (res.status === 200) {
        res.json().then((result) => {
          getProducts();
          Toast.fire({
            icon: 'success',
            title: 'Product Update Successfully!',
          });
          setActionType(null);
          setOpen(false);
          clean();
        });
      }
    });
  };
  return (
    <ProductTemplate
      product={product}
      open={open}
      setOpen={setOpen}
      classes={classes}
      onPageChange={setPage}
      onFilterChange={setSort}
      filterOption={sort}
      name={name}
      setName={setName}
      price={price}
      setPrice={setPrice}
      changeMedia={handleChangeFile}
      addProduct={handleAddNewProduct}
      deleteProduct={handleDeleteProduct}
      updateProduct={handleUpdateProduct}
      actionType={actionType}
      setActionType={setActionType}
      error={error}
      setEditValue={setEditValue}
      mediaLink={mediaLink}
    />
  );
}
