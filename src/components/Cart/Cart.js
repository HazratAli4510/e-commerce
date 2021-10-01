import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Cart = (props) => {
    const { products } = props

    let productPrice = 0
    let quantity = 0;

    for (const product of products) {
        if (!product.quantity) {
            product.quantity = 1
        }
        quantity = quantity + product.quantity
        
        productPrice = productPrice + product.price * product.quantity
    }

    const shippingFee = productPrice ? 20 : 0

    const Tax = (productPrice / 100) * 10


    
    return (
        <div>
            <Typography variant="h6" sx={{px:5 , py:2}}>Total added products: {quantity}</Typography>
            <Box sx={{display: 'flex' , justifyContent: 'space-between'}}>
                <Typography>Product price:</Typography>
                <Typography>{ productPrice.toFixed(2)}</Typography>
            </Box>
            <Box sx={{display: 'flex' , justifyContent: 'space-between'}}>
                <Typography>Shipping Fee:</Typography>
                <Typography>{ shippingFee}</Typography>
            </Box>
            <Box sx={{display: 'flex' , justifyContent: 'space-between'}}>
                <Typography>Tax:</Typography>
                <Typography>{Tax.toFixed(2)}</Typography>
            </Box>
            <Box sx={{display: 'flex' , justifyContent: 'space-between'}}>
                <Typography>Grand Total:</Typography>
                <Typography>{(productPrice+shippingFee+Tax).toFixed(2)}</Typography>
            </Box>
            <Box sx={{display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}>
                <Button variant="contained" color="primary">
              Go to Checkout
            </Button>
            </Box>
        </div>
    );
};

export default Cart;