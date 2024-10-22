const express = require("express");
let cors = require("cors");

const app = express(),
	port = process.env.PORT || 3000;
app.use(cors());
app.get("/", (_request, response) => {
	response.send({ hello: "World" });
});
app.listen(port, () => {
	console.log(`Redo på http://localhost:${port}/`);
});
