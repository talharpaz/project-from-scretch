const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;;

// מאפשר לשרת לקרוא JSON
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// route ראשון
app.post("/ask", (req, res) => {
  const question = req.body.question;

  let answer = "This is a demo answer from the server.";

  if (question.includes("sleep") || question.includes("שינה")) {
    answer = "Server says: keep fixed sleep hours and avoid screens.";
  }

  res.json({ answer });
});


// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
