const express = require("express");
const app = express();
var qr = require("qr-image");
var url = require("url");
var ip = require('ip');


console.log(ip.address());

app.use(
  "./dist/site",
  express.static("public")
); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

app.use(
  "./dist/auth",
  express.static("public-two")
); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));

app.listen(3000, "127.0.0.1", function() {
  // app.listen("80.192.157.49", function() {
  console.log("Listening on port 3000!");
});

app.get("/main", function(req, res) {
  res.sendFile("dist/index.html", {
    root: __dirname
  });
});


app.get("/", function(req, res) {
  res.redirect('/login')
});


app.get("/login", function(req, res) {
  res.sendFile("dist/auth/index.html", {
    root: __dirname
  });
});

app.get("/login/css", function(req, res) {
  res.sendFile("dist/auth/auth.css", {
    root: __dirname
  });
});
app.get("/file", (req, res) => {
  res.sendFile("dist/site/js/app.js", {
    root: __dirname
  });
});

app.get("/js/wow.min.js", (req, res) => {
  res.sendFile("node_modules/wow.js/dist/wow.min.js", {
    root: __dirname
  });
});

app.get("/style", (req, res) => {
  res.sendFile("dist/site/css/app.css", {
    root: __dirname
  });
});

app.get("/img", (req, res) => {
  res.sendFile("images/demo.png", {
    root: __dirname
  });
});

app.get("/fonts/fa-brands-400.woff", (req, res) => {
  res.sendFile("dist/site/fonts/fa-brands-400.woff", {
    root: __dirname
  });
});

app.get("/fonts/fa-brands-400.woff2", (req, res) => {
  res.sendFile("dist/site/fonts/fa-brands-400.woff2", {
    root: __dirname
  });
});



app.get("/favicon.ico", (req, res) => {
  res.sendFile("dist/site/images/favicon.ico", {
    root: __dirname
  });
});

app.get("/img/qrSvg", (req, res) => {
  // console.log(req.headers.host);
  // console.log(req.headers.referer);
  generateQr(req.headers.referer);
  setTimeout(function() {
    res.sendFile("dist/site/images/qr.svg", {
      root: __dirname
    });
  }, 100);
});

var fs = require("fs");
async () => {
  var files = await fs.readdirSync("./dist/site/fonts").then(() => {
    files.forEach(font => {
      app.get(`/fonts/${font}`, (req, res) => {
        res.sendFile(`dist/site/fonts/${font}`, {
          root: __dirname
        });
      });
    });
  });
};
// console.log(files)

app.get("/security/text", (req, res) => {
  res.sendFile("node_modules/text-security/text-security.css", {
    root: __dirname
  });
});

var secure = fs.readdirSync("./node_modules/text-security/")
console.log(secure)
secure.forEach(file => {
  console.log(file)
  app.get(`/text-security/${file}`, (req, res) => {
    res.sendFile(`node_modules/text-security//${file}`, {
      root: __dirname
    });
  });
});


// async () => {
//   var secure = await fs.readdirSync("./dist/auth/text-security/").then(() => {
//     secure.forEach(file => {
//       // console.log(file)
//       app.get(`/text-security/${file}`, (req, res) => {
//         res.sendFile(`node_modules/text-security/${file}`, {
//           root: __dirname
//         });
//       });
//     });
//   });
// };


var files = fs.readdirSync("./dist/site/images")
files.forEach(image => {
  // console.log(image)
  app.get(`/images/${image}`, (req, res) => {
    // console.log(image);
    // console.log("get")
    res.sendFile(`dist/site/images/${image}`, {
      root: __dirname
    });
  });
});

function generateQr(url) {
  console.log("asdasd", url);
  let qrSvg = qr.image(url, {
    type: "svg"
  });
  // return qrSvg;
  qrSvg.pipe(require("fs").createWriteStream("dist/site/images/qr.svg"));
}
