const express = require("express");
const path = require("path");

const app = express();
const indexRouter = require("./routes/index");

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views")); 

app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.urlencoded({ extended: true })); 

app.use("/", indexRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
