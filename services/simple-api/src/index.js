import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const sleep = (time = 100) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

app.get("/", async (req, res) => {
  await sleep();
  res.json({ message: "Welcome to the Simple API!" });
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
