const io = require("socket.io")();
var questionPool = [];

io.on("connection", (client) => {
  console.log("A client connected");
  client.on("new questions", (questions) => {

    //Add new questions to the question pool
    for (var i = 0; i < questions.length; i++) {
      questionPool.push(questions[i]);
    }

    //Emit event to browser
    io.emit("all questions", questionPool);
  });
});

const port = 3000;
io.listen(port);
console.log("listening on port ", port);
