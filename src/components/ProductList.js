// ProductList.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { addToWishlist } from '../actions/wishlistActions';
import { fetchProducts } from '../services/productService';
import Pagination from './Pagination';
import '../styles.css'; // Import the CSS file
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProducts(currentPage);
        setProducts(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchProductData();
  }, [currentPage]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="container">
      <Typography variant="h4" color="primary" gutterBottom>
        Product List
      </Typography>
      {products.map((product) => (
        <Card key={product.id} variant="outlined">
          <CardContent>
            <Typography variant="h6" component="div">
              {product.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => handleAddToCart(product)}
              variant="contained"
              color="primary"
              disabled={product.addedToCart}
            >
              Add to Cart
            </Button>
            <Button
              onClick={() => handleAddToWishlist(product)}
              variant="outlined"
              color="primary"
              disabled={product.addedToWishlist}
            >
              Add to Wishlist
            </Button>
          </CardActions>
        </Card>
      ))}
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default ProductList;
