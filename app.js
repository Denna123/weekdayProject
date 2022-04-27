//jshint sversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.set("view engine", "ejs");
app.get("/", function(req, res) {
    
    var today = new Date();

    var options = {
      weekday: "long", 
      day: "numeric",
      month: "long"
    }

    var day = today.toLocaleString("en-US", options);


    // var currentDay = today.getDay();
    // var day = "";

    // switch (currentDay) {
    //   case 0:
    //     day = "Sunday";
    //     break;
    //   case 1:
    //     day = "Monday";
    //     break;

    //   case 2:
    //     day = "Tuesday";
    //     break;
    //   case 3:
    //     day = "Wednesday";
    //     break;
    //   case 4:
    //     day = "Thursday";
    //     break;
    //   case 5:
    //     day = "Friday";
    //     break;
    //   case 6:
    //     day = "Saturday";
    //     break;

    //   default:
    //     break;
    //     console.log("Error: current day is equal to: " + currentDay)
    // }



    // if (currentDay === 6 || currentDay === 0) {
    //     day ="Weekend";
    // }else if (currentDay === 1 ){
    //     day ="Monday";
    // } else if (currentDay === 2 ){
    //     day ="Tuesday";
    // } else if (currentDay === 3 ){
    //     day ="Wednesday";
    // } else if (currentDay === 4){
    //     day ="Thursday";
    // }  else {
    //     day = "Friday";
    // }
 
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {


  
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
  let item =req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000")
});