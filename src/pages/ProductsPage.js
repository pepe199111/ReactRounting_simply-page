import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductsPage = ({ match }) => {
  return (
    <>
      <div>Products Page</div>
      <Product product={match.params.product} />
      <Link to='/products'>Go back to products list</Link>
    </>
  );
}

export default ProductsPage;