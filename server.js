const express = require("express");
const fetchAnnouncements = require("./fetchDetails");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/v1/announcements", async (req, res) => {
  try {
    const data = await fetchAnnouncements();
    res.json(data);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Failed to fetch data from NSE" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
