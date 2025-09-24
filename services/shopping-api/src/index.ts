import express from "express";

const app = express();
const port = 3000;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method}: ${req.path}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("ok");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Shopping route
app.get("/shopping", (req, res) => {
  const items = [
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" },
    { id: 3, name: "Item Three" },
  ];
  res.json(items);
});

// Terminate route
let server: any;
app.get("/terminate", (req, res) => {
  res.json({ message: "Server terminating" });
  console.log("Terminating server...");
  // Graceful shutdown
  server.close(() => {
    console.log("Server stopped.");
    process.exit(0);
  });
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).send("Not found");
});

// Start server
server = app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
