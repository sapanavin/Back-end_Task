const CardData = require("../models/CardData");
const Fixture = require("../models/Fixture");

const PointTable = require("../models/pointsTable");

const getLiveMatchCard = async (req, res) => {
    try {
      
      
      const liveMatches = await CardData.find();
      res.json({ message: "Live Match Details : ", liveMatches });
    } catch (err) {
      res.status(500).json({ error: "Could not find Live Match Details" });
    }
  };

const addLiveMatchCard = async (req, res) => {
  try {
    const { hometeam, hometeamscore, awayteam ,awayteamscore} = req.body;
    const record = new CardData({ hometeam, hometeamscore, awayteam, awayteamscore  });
    await record.save();
    res.json({ message: "Data added successfully", record });
  } catch (err) {
    res.status(500).json({ error: "Could not add a new data Record" });
  }
};



module.exports = {
    getLiveMatchCard,
    addLiveMatchCard
};


//Here get live Matches is done with comparision on date parameter from fixtures 
/*
const getLiveMatchCard = async (req, res) => {
  try {
    //const fixtures = await Fixture.find().populate("date", "sport");
    const fixtures = await Fixture.find();
    const today =new Date();
   // console.log("Today's Date is" , new Date().toString());

    //console.log("Today's Date is" , today.getDate() ,today.getMonth() ,today.getFullYear());
    var liveMatchTeamNames = [];
    //gettting TeamName playing of Live match 
    fixtures.forEach(a => {
        
        if ((a.date.getDate() === today.getDate()) && (a.date.getMonth() === today.getMonth()) && (a.date.getFullYear() === today.getFullYear())){
            liveMatchTeamNames.push(a.teamName);
          
          } else {
            console.log("date1 and date2 are not the same");
          }   
    });

//getting points for the live match teams

const liveMatchTeamPoints = await PointTable.find();
const liveMatches =[];

     //console.log("liveMatchTeamPoints : ", liveMatchTeamPoints);
     //console.log("liveMatchTeamNames.length : ", liveMatchTeamNames.length);
     
     for(let i = 0; i < liveMatchTeamNames.length; i++){
        //console.log("i : ", i ,liveMatchTeamNames[i].toString()  );
        liveMatchTeamPoints.forEach( 
            x => {
               if(x.teamName === liveMatchTeamNames[i]){

                const teamName = x.teamName;
                const points = x.points;

                const temp = new PointTable({ teamName, points });
                liveMatches.push(temp);
                //console.log(x.teamName +"    "+liveMatchTeamNames[i]);
               }
           

        });
      }
        console.log("liveMatches : " ,liveMatches)
        res.json(liveMatches);
    
    
   
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Could not fetch fixtures" });
  }
};
*/