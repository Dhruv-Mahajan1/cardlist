import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

export default function LetterAvatars({ pairs }) {
  return (
    <Stack
      direction="row"
      spacing={0.3}
      style={{
        display: "flex",
        justifyContent: "center",
        border: "3.5px solid rgb(20, 21, 43)",
        height: "auto",
        borderRadius: "25px",
        width: "50%",
        boxShadow: "0px -0.8px 4px 0px  #fff",
      }}
    >
      {pairs.map((pair, index) => (
        <div key={pair.name}>
          <Avatar sx={{ width: 24, height: 24 }} src={pair.src}></Avatar>
        </div>
      ))}
    </Stack>
  );
}
