import {CircularProgress, Container, Grid} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToLocal, getLocalCart } from '../../Utilities/LocalStorage';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToLocal(product.key)
    }
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-module-54/main/public/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const localCart = getLocalCart()
        if (products.length) {
            const localPorducts = []
            for (const key in localCart) {
                const product = products.find(product => product.key === key)
                if (product) {
                    const quantity = localCart[key]
                    product.quantity = quantity
                    localPorducts.push(product)
                }
            }
            setCart(localPorducts)
        }
    },[products])

    return (
        <div>
            <Container>
            <Box sx={{my:3}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.length?
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            addToCart ={addToCart}
                        ></Product>) :
                            
                            // Lodaing system
                            
                            <Box className='process'>
                                <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                            </Box>
                            </Box>
                }
                </Grid>
            </Box>
            </Container>
            <Box className="cartBox">
                <Cart products={cart}></Cart>
            </Box>
        </div>
        
    );
};

export default Shop;