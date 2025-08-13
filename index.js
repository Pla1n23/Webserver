const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Привет, Express!");
// });

app.use(express.static(__dirname + "/public"));

let counter = 0;

app.get("/api/counter", (req, res) => {
  counter++;
  res.json({ counter }); // Отправляем JSON
});

app.listen(3000, () => {
  console.log("Сервер запущен на http://localhost:3000");
});
