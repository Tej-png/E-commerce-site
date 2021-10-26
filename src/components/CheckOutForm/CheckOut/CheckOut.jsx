import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import commerce from "../../lib/commerce";
const steps = ["Shipping address", "Payment details"];
const CheckOut = ({ cart, onCaptureCheckout, order, error }) => {
  const classes = useStyles();
  const [isFinished, setIsFinished] = useState(false);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const history = useHistory();
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (err) {
        if (activeStep !== steps.length) history.push("/");
      }
    };
    generateToken();
  }, [cart]);

  const timeout = () => {
    setTimeout(() => {
        setIsFinished(true);
    }, 3000);
  };
  const Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography varient="h5">
            Thank you for purchasing {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </Typography>
          <Divider></Divider>
          <Typography variant="subtitle2">
            order ref: {order.customer_refrence}
          </Typography>
          <Button component={Link} to="/" varient="outlined" type="button">
            Back to home{" "}
          </Button>
        </div>
      </>
    ) : isFinished ? (
    <div>
        <Typography varient="h5">
          Thank you for purchasing !
        </Typography>
        <br/>
        <Divider></Divider>
        <br/>
        <Button component={Link} to="/" varient='contained' type="button">
          Back to home
        </Button>
      </div>) : (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress></CircularProgress>
      </div>
    );
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm next={next} checkoutTokenID={checkoutToken}></AddressForm>
    ) : (
      <PaymentForm
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        shippingData={shippingData}
        backStep={backStep}
        checkoutToken={checkoutToken}
        timeout={timeout}
      ></PaymentForm>
    );
  const nextStep = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };
  const backStep = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  return (
    <>
      <CssBaseline></CssBaseline>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default CheckOut;
