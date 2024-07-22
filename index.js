import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import fs from "fs"

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static("public"))

app.get("/", (req, res) => {
  const html = fs.readFileSync("./index.html", "utf-8")
  res.send(html)
})

io.of("/login").on('connection', (socket) => {
  socket.emit("login", "Testing")
});

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on *:3000');
});
