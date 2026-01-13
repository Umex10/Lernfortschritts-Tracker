import express from "express";
import path from "path"; // This is generating the absolute path to the source, works on all OS-Systems

const app = express(); // server
const PORT = 3000;

app.use(express.static(path.join(process.cwd(), "public"))); //middleware

app.get("/module.json", (req, res) => {
  res.sendFile(path.join(process.cwd(), "server/module.json"));
});

app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));


