let users = [];

function mySocket(io) {
  io.on("connection", function (socket) {
      socket.on("disconnect", function () {
        userLeave({socket_id: socket.id});
        console.log("User out")
        console.log(users)
        // io.emit("send-list-user-online", users)
      })
      socket.on('user-login', user_id => {
        userJoin({user_id: user_id, socket_id: socket.id})
        console.log("User in")
        console.log(users)
        // io.emit("send-list-user-online", users)
      })
  })
}

function userJoin({user_id, socket_id}) {
  users.push({ user_id, socket_id })
}

function userLeave({socket_id}) {
  const index = users.findIndex(user => user.socket_id === socket_id)
  if (index !== -1) {
      users.splice(index, 1)[0];
  }
}

module.exports = mySocket;
