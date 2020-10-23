const express = require("express");
const app = express();
const user = require("./userRoute");
const post = require("./postRoute");
const comment = require("./commentRoute");
const specificComment = require("./specificComment");
const photos = require("./photosRoute");

app.use("/users", user);
app.use("/posts", post);
app.use("/comments", comment);
app.use("/", specificComment);
app.use("/photos", photos);

app.listen(3000, () => console.log("Listenin on Port 3000"));
