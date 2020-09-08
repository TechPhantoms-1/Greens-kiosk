import React from 'react';
import ProductAlerts from './ProductAlerts';
import { Link } from 'react-router-dom';
import ProductAlerts from '../components/ProductAlerts';



import {products} from './products';
import {products} from '../Utils/products';


const ProductList = ({ name }) => {
const ProductList = ({ name }) => {

      {products.map(product => {
        return (
          <div class="products">
          <div className="products" key={product.id}>
            <h3>
              <a title={`${product.type1} details`}>
              <a title={`${product.type1} details`} href="#">
                { product.type1 }
              </a>
            </h3>
            
            <img src={product.images}></img>
  <Link to={`/post/${product.id}`}><img src={product.images} /></Link>

            <h3>
              <a title={`${product.quantity} details`}>
              <a title={`${product.quantity} details`} href="#">
               Quantity { product.quantity }
              </a>
            </h3>
            <h3>
              <a title={`${product.price} details`}>
              <a title={`${product.price} details`} href="#">
                Ksh.{ product.price }
              </a>
            </h3>
            {product.veges && <p>{`Type: ${product.veges}`}</p>}
            {product.fruits && <p>{`Type: ${product.fruits}`}</p>}
            <button onClick={Buy}>
              Buy

            <button onClick={Buy} style={{float:'right'}}>
              Add to cart
            </button>
            <ProductAlerts product={product} notify={onNotify} />
            
          
          </div>
        )
      })}