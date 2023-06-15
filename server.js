// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const reactBuild = fs.readFileSync(
  path.join(__dirname, "react-build", "index.html")
);

function parseCookies(request) {
  var list = {},
    rc = request.headers.cookie;

  rc &&
    rc.split(";").forEach(function (cookie) {
      var parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });

  return list;
}

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    var cookies = parseCookies(req);

    const path = `/${pathname.split("/")[1]}`;

    const links = [
      "/auth",
      "/register",
      "/forgot-password",
      "/register-complete",
      "/confirm-email",
      "/blocked",
      "/resend-email",
      "/bad-credentials",
      "/load",
      "/transport",
    ];

    if (cookies.AUTH === "true" || links.includes(path)) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(reactBuild);
      res.end();
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3003, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3003");
  });
});
