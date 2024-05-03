const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello! this is vineet server",
    success: true,
  });
});

(() => {
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
})();
