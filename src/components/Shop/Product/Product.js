import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = (props) => {
    const { name, img,price } = props.product
    const {addToCart} = props
    return (
        <Grid item xs={4} sm={4} md={3}>
            <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                component="img"
                height="100%"
                image={img}
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                     {name.slice(0,30)}...
                    </Typography>
                    <Typography sx={{my:0.5}} variant='h5'>Price : { price}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=> addToCart(props.product)} variant='contained' size="small">Add to cart</Button>
                    <Button size="small">Details</Button>
                </CardActions>
                </Card>
        </Grid>
    );
};

export default Product;