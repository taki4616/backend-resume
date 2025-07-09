/* eslint-disable no-undef */
/* eslint-env node */

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const PASSWORD = "nannypass123";

app.post("/download_resume", (req, res) => {
  const { password } = req.body;

  if (password !== PASSWORD) {
    return res.status(401).json({ message: "Incorrect password." });
  }

  const filePath = path.join(__dirname, "resume2.pdf");
  res.download(filePath, "Nataki-Skinner-Resume.pdf");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
