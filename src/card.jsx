import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import { shadows } from "@mui/system";

const coin = {
  name: "Bitcoin (BTC)",
  price: "233,000",
  TVL: "333",
  change: "+10%",
};

export default function CryptoCard(props) {
  return (
    <Card
      // sx={{ maxWidth: 345 }}
      sx={{
        maxWidth: 345,
        background: "linear-gradient( rgb(27,31,52) 0%,rgb(20, 21, 43) 100%)",
        width: "320px",
        height: "450px",
        margin: "30px",
        borderRadius: "20px",
        boxShadow: "0 15px 0 rgb(20, 21, 43)",
        display: "flex",
        justifyContent: "center",
        opacity: "0.9",
      }}
    >
      <CardMedia
        sx={{
          // height: 140,
          position: "relative",
          width: "140px",
          height: "120px",
          backgroundColor: "rgb(20, 23, 43)",
          borderBottomLeftRadius: "100px",
          borderBottomRightRadius: "100px",

          "&::before": {
            content: `''`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "50px",
            height: "50px",
            backgroundColor: "transparent",
            borderTopRightRadius: "50px",
            boxShadow: "15px -15px 0px 11px rgb(20, 23, 43)",
            // border: "50px solid transparent",
            // borderTopColor: "red",
          },
          "&::after": {
            content: `''`,
            position: "absolute",
            top: "0",
            right: "-50px",
            width: "50px",
            height: "50px",
            backgroundColor: "transparent",
            borderTopLeftRadius: "50px",
            boxShadow: "-15px -15px 0px 11px rgb(20, 23, 43)",
            // border: "50px solid transparent",
            // borderTopColor: "red",
          },

          boxShadow: "0px 5px 10px rgb(20, 21, 43)",
          padding: "20%",

          // border: "10px solid #fff",
        }}
        image={props.props.src}
      />
      <CardContent
        style={{
          position: "absolute",
          // width: "100%",
          padding: "150px",
          paddingTop: "140px",
          textAlign: "center",
        }}
      >
        <Typography
          style={{
            color: "#555c85",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.props.title}
        </Typography>

        <Form
          price={props.props.price}
          change={props.props.change}
          tvl={props.props.TVL}
          pairs={props.props.popularpairs}
        ></Form>
      </CardContent>
    </Card>
  );
}
