const fs = require("fs");
const { Resvg } = require("@resvg/resvg-js");
const toIco = require("to-ico");

const svg = fs.readFileSync("public/favicon.svg");

function pngAt(size) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
    background: "rgba(0,0,0,0)",
  });
  return resvg.render().asPng();
}

const png512 = pngAt(512);
const png32 = pngAt(32);
const png16 = pngAt(16);

fs.mkdirSync("public/brand", { recursive: true });
fs.writeFileSync("public/brand/avatar.png", png512);
fs.writeFileSync("public/favicon.png", png32);

toIco([png16, png32]).then((buf) => {
  fs.writeFileSync("src/app/favicon.ico", buf);
  fs.writeFileSync("public/favicon.ico", buf);
  console.log("ok", {
    avatar: png512.length,
    ico: buf.length,
  });
});
