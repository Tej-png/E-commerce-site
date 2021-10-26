import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

function Products({products, addToCart}) {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" spacing={4} className={classes.content}>
        <div className={classes.toolbar} />
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} addItemsToCart={addToCart}></Product>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
