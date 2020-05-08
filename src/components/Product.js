import React from 'react'

const Product = (props) => {
  return (
    <article className='product'>
      <h1>{props.product}</h1>
    </article>
  );
}

export default Product;