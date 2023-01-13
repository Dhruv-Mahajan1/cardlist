import React from "react";
import TextField from "@mui/material/TextField";
import { ImageList, Typography } from "@mui/material";
import Pairs from "./Pairs.jsx";
const Form = (props) => {
  return (
    <div style={{ padding: "10px" }}>
      <Typography
        style={{
          color: "#fff",
          border: "3.5px solid rgb(20, 21, 43)",
          width: "250px",
          boxShadow: "0 1px 0 rgb(20, 21, 43)",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
          boxShadow: "0px -0.8px 4px 0px  #fff",
        }}
      >
        {props.price}
        {props.change[0] === "+" ? (
          <div
            style={{
              color: "green",
              fontWeight: "bold",
              // padding: "1px",
            }}
          >
            {props.change}
          </div>
        ) : (
          <div
            style={{
              color: "red",
              fontWeight: "bold",
              // padding: "1px",
            }}
          >
            {props.change}
          </div>
        )}
      </Typography>
      <Typography
        style={{
          color: "#555c85",
        }}
      >
        Price
      </Typography>
      <Typography
        style={{
          color: "#fff",
          border: "3.5px solid rgb(20, 21, 43)",
          width: "250px",
          boxShadow: "0px -0.8px 4px 0px  #fff",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        {props.tvl}
      </Typography>
      <Typography
        style={{
          color: "#555c85",
        }}
      >
        TVL
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <Pairs pairs={props.pairs}></Pairs>
      </div>
      <Typography
        style={{
          color: "#555c85",
          padding: "8px",
        }}
      >
        Popular Pairs
      </Typography>
    </div>
  );
};

export default Form;
