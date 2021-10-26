import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  CssBaseline,
} from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";
import CarItem from "./CardItems/CarItems";

const Cart = ({ cart, onUpdateQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <>
      <Typography gutterBottom style={{paddingBottom:'10px'}} variant="subtitle1">
        You have no items in your shopping cart,
        <Link className={classes.link} to="/">
          {" "}
          start adding some
        </Link>
        !
      </Typography>
      <Button component={Link} to="/" variant='contained'>
        home
      </Button>
    </>
  );
  const FilledCart = () => {
    return (
      <>
        <CssBaseline></CssBaseline>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CarItem
                item={item}
                onRemoveFromCart={onRemoveFromCart}
                onUpdateQty={onUpdateQty}
              ></CarItem>
            </Grid>
          ))}
          <div className={classes.cardDetails}>
            <Typography variant="h4" className={classes.subtotal}>
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <Button
              className={classes.emptyButton}
              onClick={onEmptyCart}
              size="large"
              type="button"
              color="primary"
              variant="contained"
            >
              EmptyCart
            </Button>
            <Button
              component={Link}
              to="/checkout"
              style={{ marginBottom: "5px" }}
              className={classes.checkOutButton}
              size="large"
              type="button"
              color="secondary"
              variant="contained"
            >
              Check out
            </Button>
          </div>
        </Grid>
      </>
    );
  };
  if (!cart.line_items) {
    return <p>Loading....</p>;
  }
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3" className={classes.title} gutterBottom>
        Your shopping cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart></EmptyCart> : <FilledCart />}
    </Container>
  );
};

export default Cart;
