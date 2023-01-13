import "./App.css";
import { Box, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CryptoCard from "./card";
import data from "./db";
function App() {
  return (
    <>
      <div
        className="App"
        style={{
          color: "#fff",
          padding: "2rem",
          display: "flex",
        }}
      >
        <ShowChartIcon
          style={{
            color: "#FF00FF",
          }}
        />
        <Typography
          style={{
            paddingLeft: "1.2rem",
          }}
        >
          Trending Assets
        </Typography>
      </div>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {console.log(data[0])}
        <CryptoCard props={data[0]} />
        <CryptoCard props={data[1]} />
        <CryptoCard props={data[2]} />
      </Box>
    </>
  );
}

export default App;
