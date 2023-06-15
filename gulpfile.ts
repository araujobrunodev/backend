import gulp from "gulp";
import ts from "gulp-typescript";
import sourcemaps from 'gulp-sourcemaps';
import alias from "@gulp-plugin/alias";
import { spawn } from "child_process"

const tsProject = ts.createProject("tsconfig.json");

const build = (cb: (v?: any) => void) => {
  let error: any | undefined
  return gulp.src(["src/**/**.ts"])
    .pipe(alias({ config: tsProject.config.compilerOptions }))
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .on("error", (err) => {
      error = err;
      cb(err)
    }).js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .on("finish", () => {
      if (!error) cb()
    });
}

export const dev = (cb: () => void) => {
  const startServer = () => {
    const node = spawn("node", ["./dist/index.js"])

    node.stdout?.on('data', (data) => {
      process.stdout.write(data);
    });

    node.stderr?.on('data', (data) => {
      process.stdout.write(`Error: [${data}]`);
    });

    node.on("exit", () => console.log("Gulp: Stopping server..."))

    node.on("close", () => console.log("Gulp: Server stopped"))

    node.on("spawn", () => console.log("Gulp: Startup server..."))
    return node
  }
  let server: ReturnType<typeof spawn> | undefined

  const watcher = (cb: () => void) => {
    if (server) {
      server.kill("SIGILL");
      server = undefined;
    }

    build((err) => {
      if (err) {
        console.error(err);
        return cb();
      }
      console.clear()
      server = startServer();
      cb();
    })

  }



  build((err) => {
    if (err) {
      console.error(err)
      return cb();
    }
    console.clear()
    server = startServer();
  })


  return gulp.watch("./src/**/**", watcher)
}

export default build
