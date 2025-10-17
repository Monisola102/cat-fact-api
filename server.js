require("dotenv").config();
const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 4000
const app = express();
//redeploy test
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});
app.get("/", (req, res) => res.send("Server is running!"));

app.get("/me", async (req, res) => {
  try {
    const catFactRes = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });
    console.log("Cat fact Response:",catFactRes.data);
    const resData = {
      status: "success",
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.MY_STACK,
      },
      timestamp: new Date().toISOString(),
      fact: catFactRes.data.fact,
    };

    res.status(200).json(resData);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    if (error.code === "ECONNABORTED") {
      return res.status(504).json({
        status: "error",
        message: "Request to Cat Facts API timed out",
      });
    }
    if (error.response) {
      return res.status(error.response.status).json({
        status: "error",
        message: `Cat Facts API returned an error: ${error.response.statusText}`,
      });
    }

    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact due to network or unknown error",
    });
  }
});

app.listen(PORT,"0.0.0.0",() => {
  console.log(`Server is running on port ${PORT}`);
});
