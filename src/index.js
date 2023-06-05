const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const routes = require("./routes");
const dbConnect = require("./config/dbConfig");

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
  .then(() => {
    console.log("DB connected succesfully");
  })
  .catch((err) => {
    console.log(`DB error occurred: ${err.message}`);
  });

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
