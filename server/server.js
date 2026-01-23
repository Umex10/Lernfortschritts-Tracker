/**
 * Express server that serves the frontend and exposes the module.json endpoint.
 */
import express from "express";
import path from "path"; // This is generating the absolute path to the source, works on all OS-Systems

const app = express(); // server
const PT = 3000;

// middlewares
app.use(express.static(path.join(process.cwd(), "public")));
app.use("/tests", express.static(path.join(process.cwd(), "tests")));

// optional: Business logic under /src can also be served if needed
app.use("/src", express.static(path.join(process.cwd(), "src")));

app.get("/module.json", (req, res) => {
  res.sendFile(path.join(process.cwd(), "server/module.json"));
});

app.listen(PT, () => console.log(`Server is running at http://localhost:${PT}`));


