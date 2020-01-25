import Server from "socket.io"

const PORT = process.env.PORT || 8090
export default function startServer(store) {
  const io = new Server().attach(PORT)

  // publish the entire state to all connected clients
  store.subscribe(() => io.emit("state", store.getState().toJS()))

  // push current application state to clients upon connection
  io.on("connection", socket => {
    socket.emit("state", store.getState().toJS())
    // messages from connected clients
    socket.on("action", store.dispatch.bind(store))
  })
}
