const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");

const static_path = path.join("../Pages/Index.cshtml");
app.use(express.static(static_path));

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("hello")
});
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})