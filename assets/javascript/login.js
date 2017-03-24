// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrFP8NPXLZYS71ONvPLyx2KZm9hb6hORA",
    authDomain: "fitifyme-2a6ae.firebaseapp.com",
    databaseURL: "https://fitifyme-2a6ae.firebaseio.com",
    storageBucket: "fitifyme-2a6ae.appspot.com",
    messagingSenderId: "906856555576"
  };

  firebase.initializeApp(config);

var db = firebase.database();


// Creates local "temporary" object for holding user info

function saveInfo() {
  userCalorieGoal = $("#rc").val();
  userName = $("#userName").val();
  console.log(userName + userCalorieGoal);

  var userInfo = {
      name: userName,
      calories: userCalorieGoal
  };  

// POSSIBLE FUTURE USE  *********
//  var userInfo = {
//    name: userName,
//    calories: userCalorieGoal
//    age: userAge,
//    gender: userGender,
//    height: userHeight,
//    heightCm: userHeightCm,
//    weight: userWeight,
//    activeSt: userActiveSt  // user activity status 

  // Uploads userInfo to the database
	db.ref().push(userInfo);

  // Logs everything to console
  console.log(userInfo.name);
  console.log(userInfo.calories);
  
  // Alert
  alert("User Infomation successfully added");

//  clears text boxes
 $("#userName").val("");

// Prevent refreshing / moving to a new page
  return false;

 }; // end of saveInfo() function (adding a user)


// When searching for a userName (reads Firebase and searches for match)
//function saveInfo() {            // not really save-just testing
function getInfo() {         

    var foundIt = false;

// change these *********************************************************
    userName = $("#userName").val();
    console.log("OUTSIDE UserName: " + userName);

    // find all names, whose name = userName

    var db = firebase.database();

    db.ref().orderByChild("name").equalTo(userName).on("child_added", function (childSnapshot) {
     // works with warning before I set indexOf in rules

    //db.ref().on("child_changed", function (childSnapshot) {  // nope
    //db.ref().on("value", function (childSnapshot) {  // nope

//    db.ref().on("child_added", function (childSnapshot) { // this also works (consoles all)
//    above db.ref().on works sync w list (not nec.added) prints them all

    console.log("childSnapshot " + childSnapshot.key);

    //  finds (not userName, but FindMe-userName)  ***************************

    console.log("INSIDE UserName: " + userName);

    selUName = childSnapshot.val().name;
    selUCalGoal = childSnapshot.val().calories;

    console.log("******selUName: " + selUName + " and selUCalGoal: " + selUCalGoal + "***");

    if (userName == selUName) {
      userCalorieGoal = selUCalGoal;
    //  $("#userName").val("");
    //  will change this when I get the variable from Barrett
      $("#userName").val(userName+userCalorieGoal);
      $("#rc").val(userCalorieGoal);
      console.log("Display name and calories goal: " + selUName, selUCalGoal);
      foundIt = true;
//      return;
    };  // end of if (userName == selUName)
});  //  end of db.ref().on("child_added", function (childSnapshot)

/*  if (!foundIt) {     // does not work
  alert("user name not found/Try again, or go to I'm New");
  console.log("This is the end of function");
  };
*/
};  // end of getInfo function