const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = 3010;
const app = express();
app.use(express.json());
app.use(cors());

const URI = process.env.CONNECTIONSTRING;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console.error, "MongoDB Connection Error"));
console.log("Connection to mongoDB succesful");

const moviesRouter = require("./routes/movies");
const usersRouter = require("./routes/users");
app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(port, () => console.log("Express server up and running: " + port));
