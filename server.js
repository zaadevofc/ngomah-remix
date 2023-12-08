import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";

import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady, installGlobals } from "@remix-run/node";
import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import sourceMapSupport from "source-map-support";

sourceMapSupport.install();
installGlobals();

const BUILD_PATH = path.resolve("build/index.js");
const VERSION_PATH = path.resolve("build/version.txt");

const initialBuild = await reimportServer();
const remixHandler =
  process.env.NODE_ENV === "development"
    ? await createDevRequestHandler(initialBuild)
    : createRequestHandler({
      build: initialBuild,
      mode: initialBuild.mode,
    });

const app = express();

app.use(cookieParser());
app.use(compression());

app.disable("x-powered-by");

// autentikasi disini~
// app.use((req, res, next) => {
  // if (req.path == '/uu') {
  //   const setCookies = res.cookie('hahay', signJWT({ haii: 'ss' }))
  //   let cookies = req.cookies;
  //   let session = verifyJWT(cookies.hahay)
  //   if (typeof 0 == 'number') return res.send({ session})
  // }
  // return res.send('hallllo')
//   return next()
// })

app.use("/build", express.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(express.static("public", { maxAge: "1h" }));
app.use(morgan("tiny"));
app.all("*", remixHandler);

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  console.log(`Express server listening on port ${port}`);

  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(initialBuild);
  }
});

async function reimportServer() {
  const stat = fs.statSync(BUILD_PATH);
  const BUILD_URL = url.pathToFileURL(BUILD_PATH).href;
  return import(BUILD_URL + "?t=" + stat.mtimeMs);
}

async function createDevRequestHandler(initialBuild) {
  let build = initialBuild;
  async function handleServerUpdate() {
    build = await reimportServer();
    broadcastDevReady(build);
  }
  const chokidar = await import("chokidar");
  chokidar
    .watch(VERSION_PATH, { ignoreInitial: true })
    .on("add", handleServerUpdate)
    .on("change", handleServerUpdate);

  return async (req, res, next) => {
    try {
      return createRequestHandler({
        build,
        mode: "development",
      })(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
