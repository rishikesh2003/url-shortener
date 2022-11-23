const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/short", async (req, res) => {
  const url = req.body.url;
  console.log(`https://short-link-api.vercel.app/?query=${url}`);
  const response = await axios(
    `https://short-link-api.vercel.app/?query=${url}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json",
      },
    }
  );
  await res.send(response.data);
});

app.listen(5000, () => {
  console.log("Listening on PORT 5000");
});
