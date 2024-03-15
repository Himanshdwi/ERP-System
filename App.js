import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import ProductForm from './components/ProductForm';
import productsData from './data/products';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Dashboard></Dashboard>
    ),
  },
  {
    path: "/products",
    element: (
      <ProductsManagement></ProductsManagement>
    ),
  },
  {
    path: "/products/edit/:productId",
    element: <ProductForm></ProductForm>,
  },
  {
    path: "/orders",
    element: (
      <OrdersManagement></OrdersManagement>
    ),
  }
]);
const App = () => {
    return (
      <div className="App">
      
        <RouterProvider router={router} />
      
    </div>
    );
};

export default App;
