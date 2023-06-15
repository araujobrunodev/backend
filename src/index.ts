import http from "http"
import ws from "ws"
import { Server as BucketFiles } from "node-static"

import Manager from "./manager";
import controllers from "./controllers"

const PORT = process.env.PORT ?? 3000

const bucket = new BucketFiles("../my-vue-app/dist", { indexFile: "index.html" })
const server = http.createServer((request, response) => {
  request.on("end", () => {
    bucket.serve(request, response)
  }).resume()
});
const websocket = new ws.WebSocketServer({ server })


controllers(new Manager(websocket))

server.listen(PORT, () => {
  console.log(`Server up on localhost:${PORT}`)
})
