const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/players/active", (req, res) => {
  res.json([
    { id: 1, name: "PlayerOne" },
    { id: 2, name: "PlayerTwo" },
  ]);
});

app.get("/api/servers/active", (req, res) => {
  res.json([
    { id: "srv-1", status: "running" },
    { id: "srv-2", status: "idle" },
  ]);
});

app.post("/api/servers/:id/shutdown", (req, res) => {
  res.json({ message: `Server ${req.params.id} shutdown initiated.` });
});

app.get("/api/servers/:id/output", (req, res) => {
  res.json({ output: "Fake server logs...\nEverything is running smoothly." });
});

app.get("/api/servers/:id/data", (req, res) => {
  res.json({ cpuUsage: "45%", memoryUsage: "2GB", uptime: "5 hours" });
});

app.listen(3000, () => {
  console.log("Backend server running on http://localhost:3000");
});
