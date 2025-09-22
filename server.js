const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public")); // serve frontend files

let messages = []; // store messages in memory

// Get all messages
app.get("/messages", (req, res) => {
  res.json(messages);
});

// Add a new message
app.post("/message", (req, res) => {
  const text = req.body.text;
  if(text) {
    messages.push(text);
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: "Message required" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
