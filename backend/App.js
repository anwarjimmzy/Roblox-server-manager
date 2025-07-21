// app.js

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy Data
const activePlayers = [
  { id: 1, name: "PlayerOne", score: 150 },
  { id: 2, name: "PlayerTwo", score: 200 },
  { id: 3, name: "PlayerThree", score: 180 },
];

const activeServers = [
  { id: "srv-1", status: "running", players: 10 },
  { id: "srv-2", status: "idle", players: 0 },
];

// API Routes
app.get("/api/players/active", (req, res) => {
  res.json(activePlayers);
});

app.get("/api/servers/active", (req, res) => {
  res.json(activeServers);
});

app.post("/api/servers/:id/shutdown", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Server ${id} shutdown simulated.` });
});

app.get("/api/servers/:id/output", (req, res) => {
  res.json({
    output: `Server ${req.params.id} logs...\nAll systems operational...`,
  });
});

app.get("/api/servers/:id/data", (req, res) => {
  res.json({
    id: req.params.id,
    cpuUsage: "45%",
    memoryUsage: "2GB",
    uptime: "5 hours",
  });
});

module.exports = app;
