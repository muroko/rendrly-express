var express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  app = express();

var port = process.env.PORT || 3300;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

//app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static('public',{index:false, extensions:['json']}));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "/"));
});

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + port);
});
