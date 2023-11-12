const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
//const url = require('url').URL;

const pointsTableRoutes = require("./src/routes/pointsTable");
const fixtureRoutes = require("./src/routes/Fixture");
const liveStreamRoutes = require("./src/routes/LiveStream");
const userRoutes = require("./src/routes/User");
const cardDataRoutes = require("./src/routes/CardData");
const scheduleRoutes = require("./src/routes/Schedule");
const teamDetailsRoutes = require("./src/routes/TeamDetails");
const livePollRoutes = require("./src/routes/LivePoll");



mongoose
  .connect("mongodb://127.0.0.1:27017/eshway-task", {
    useNewUrlParser: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.use(express.json());
app.use("/api/points-table", pointsTableRoutes);
app.use("/api/fixtures", fixtureRoutes);
app.use("/api/live-streams", liveStreamRoutes);
app.use("/api", userRoutes);
app.use("/api/live-match-card", cardDataRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/team-members", teamDetailsRoutes);
app.use("/api/live-poll", livePollRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//WebSocket Starts

const WebSocketServer = require('ws');
 

const wss = new WebSocketServer.Server({ port: 5555 })
 

wss.on("connection", (ws, req) => {

    //const path = url.parse(req.url);
    const path = require('url').parse(req.url, true);
    console.log("Path : ", path);
    const pathname =path.pathname;


    if(pathname === "/socket/live-poll"){
      
      ws.on("vote-from-client", data => {
         console.log(` Vote Received from Client: ${data}`)
       });
    }
    else if(pathname === "/socket/live-score"){
      ws.on("updatedScore", data => {
        console.log(` updatedScore : ${data}`)
      });
      ws.on("goal", data => {
        console.log(` goalDetails : ${data}`)
      });
    }
    else if(pathname === "/socket/live-chat"){
      ws.on("newComment", data => {
        console.log(` user added newComment : ${data}`)
      });
      ws.on("deleteComment", data => {
        console.log(` user deleted Comment : ${data}`)
      });
      ws.on("reportComment", data => {
        console.log(` user reported Comment : ${data}`)
      });
    }
    
   
    ws.onerror = function () {
        console.log("Error occurred")
    }
});
console.log("The WebSocket server is running on port 5555");