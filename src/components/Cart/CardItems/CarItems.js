import * as React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

export default function CarItem({ item, onUpdateQty, onRemoveFromCart}) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={item.image.url} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" color="text.secondary">
          {item.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={classes.button} onClick={() => onUpdateQty(item.id, item.quantity - 1)}>-</Button>
        <div>
          <Typography align="center" style={{ padding: "5px", margin: "5px" }}>
            {item.quantity}
          </Typography>
        </div>
        <Button className={classes.button} onClick={() => onUpdateQty(item.id, item.quantity + 1)} className={classes.button}>+</Button>
        <Button color="secondary" className={classes.button} onClick={() => onRemoveFromCart(item.id)} variant="contained">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
