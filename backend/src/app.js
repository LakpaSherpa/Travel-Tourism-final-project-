const express = require("express");
const path = require("path");

const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
const routes = require("./routes/");
const config = require("./config/keys");
const cors = require("cors");
const bodyParser = require('body-parser');


const connectionDb = require("./db/database");
const { errorConverter, errorHandler } = require("./middleware/error");
const app = express();

// port
const port = require("./config/keys").port;

// parse json request body
// app.use(express.json());

//cors
app.options("*", cors());
app.use(cors());

// parse urlencoded request body
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public/uploads')));

//connect MongoDb
connectionDb();

//api routes
app.use("/api", routes);



//send back 404 error if request not found
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
});

//convert error to  ApiError
app.use(errorConverter);

//handling error
app.use(errorHandler);

// connecting to server

app.listen(port, function () {
  console.log(`Server is listening on http://localhost:${port}`);
});

module.exports = app;
