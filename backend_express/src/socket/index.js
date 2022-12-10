let users = [];

function mySocket(io) {
  io.on("connection", function (socket) {
      socket.on("disconnect", function () {
        const isLeave = userLeave({socket_id: socket.id});
        if(isLeave) {
          io.emit("list-user-online", users)
        }
        console.log("number user online: ", users.length)
      })
      socket.on('user-login', user => {
        let isJoin = userJoin({user: user, socket_id: socket.id})
        if(isJoin) {
          io.emit("list-user-online", users)
        }
        console.log("number user online: ", users.length)
      })
  })
}

function userJoin({user, socket_id}) {
  const userOld = users.filter(item => item.user._id == user._id).length > 0
  if(!userOld) {
    users.push({user, socket_id})
    return true;
  }
  return false
}

function userLeave({socket_id}) {
  const index = users.findIndex(user => user.socket_id === socket_id)
  if (index !== -1) {
      users.splice(index, 1)[0];
      return true;
  }
  return false;
}

module.exports = mySocket;
