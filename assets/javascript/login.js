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

function writeUserData() {
  // Creates local "temporary" object for holding user info

  var userCalorieGoal = $("#rc").val();
  var userName = $("#userName").val();

  var userInfo = {
      name: userName,
      calories: userCalories
  };
// POSSIBLE FUTURE USE  *********
 /*   age: userAge,
    gender: userGender,
    height: userHeight,
    heightCm: userHeightCm,
    weight: userWeight,
    activeSt: userActiveSt  // user activity status */

  // Uploads userInfo to the database
	db.ref().push(userInfo);

  // Logs everything to console
  console.log(userInfo.name);
  console.log(userInfo.calories);
  
  // Alert
  alert("User Infomation successfully added");

};

writeUserData();

//***********************************************************************************
//  clears text boxes
/*  $("#add-user-name").val("");

// Prevent refreshing / moving to a new page
  return false;

 }); // end of add-user click

// When user adds entry to database (in other event), this creates Fbase event for 
//  adding row in html 

db.ref().on("value", function (childSnapshot, prevChildKey) {

  //  Store database value of calories into the 

  var userName = childSnapshot.val().name;
  var userCalories = childSnapshot.val().calories;
  
  console.log("The following are the four items: ");
  console.log(userName);
  console.log(userCalories);

//  var whatever = ???

// What to do with new user

});

*/