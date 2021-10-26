import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart} from '@material-ui/icons';
import useStyles from './Styles'
function Product({product, addItemsToCart}) {
    const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image.url} title={product.name}></CardMedia>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography varient='h5' gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography varient='h5'>
                            {product.price.formatted_with_symbol}
                        </Typography>

                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }}varient='body2' color='textSecondary'>
                        </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label='Add to cart' onClick={()=>addItemsToCart(product.id,1)}><AddShoppingCart></AddShoppingCart></IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
