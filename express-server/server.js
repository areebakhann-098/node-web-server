import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("./public"));


app.use((req, res) => {
  res.status(404).send("Page Not Found!");
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
