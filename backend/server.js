const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

let servers = [];

app.post("/api/servers/update", (req, res) => {
  const { placeId, jobId, playerCount } = req.body;
  const index = servers.findIndex((s) => s.jobId === jobId);

  if (index !== -1) {
    servers[index] = { placeId, jobId, playerCount, lastUpdate: Date.now() };
  } else {
    servers.push({ placeId, jobId, playerCount, lastUpdate: Date.now() });
  }

  res.json({ message: "Server updated" });
});

app.get("/api/servers", (req, res) => {
  res.json(servers);
});

app.listen(8080, () => {
  console.log("Backend running at http://localhost:8080");
});
