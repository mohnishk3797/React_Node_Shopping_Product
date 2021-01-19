import React from 'react';
import { Product } from '../component/pages';
export const routes = [
  {
    path: '/',
    title: '/',
    exact: true,
    component: () => <Product />,
  },
];
