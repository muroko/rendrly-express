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

// Remove Url extension 
//ex: from https://example.com/index.html
//to https://example.com/

//json api - uncomment to use for json api serving 
/*app.use(express.static('public',{index:false, extensions:['json']}));*/

//html page
app.use(express.static('public',{index:false, extensions:['html']}));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "/"));
});

var server = app.listen(port, function() {
  console.log("Rendrly Express is running on http://localhost:" + port);
});
