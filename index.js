require("dotenv").config();
const express = require("express");
const app = express();

const LOOKER_HOST = process.env.LOOKER_HOST;
const DASHBOARD_ID = process.env.DASHBOARD_ID;

app.use(express.static(__dirname));

function generateEmbedUrl() {
  return `${LOOKER_HOST}/embed/dashboards/${DASHBOARD_ID}?allow_login_screen=true`;
}

// Endpoint to get the signed embed URL
app.get("/embed-url", (req, res) => {
  const embedUrl = generateEmbedUrl();
  res.json({ embedUrl });
});

// Start the server
app.listen(9605, () => {
  console.log("Server running at http://localhost:9605");
});
