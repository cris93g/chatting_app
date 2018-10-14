const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = process.env.port || 3001;
const app = express();

app.listen(port, () => {
	console.log(`server is up and running on port ${port}`);
});
