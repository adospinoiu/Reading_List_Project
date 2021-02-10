const express = require("express");
const morgan = require("morgan");

const htmlRoutes = require("./routes/htmlRoutes.js");

// Initialize the application to create a port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan('tiny'));

//Routes to the html and api .js files
app.use("/", htmlRoutes);

// Start up the server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));