import Server from "socket.io"

export default function startServer(store) {
  const io = new Server().attach(8090)

  // publish the entire state to all connected clients
  store.subscribe(() => io.emit("state", store.getState().toJS()))

  // push current application state to clients upon connection
  io.on("connection", socket => {
    socket.emit("state", store.getState().toJS())
    // messages from connected clients
    socket.on("action", store.dispatch.bind(store))
  })
}
