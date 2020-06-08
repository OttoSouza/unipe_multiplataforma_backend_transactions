const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
app.use(
  cors({
    origin: ["https://finances-back.herokuapp.com/", "http://localhost:3000"],
  })
);
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000);
