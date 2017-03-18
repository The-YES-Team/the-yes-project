
//<script src="https://www.gstatic.com/firebasejs/3.7.2/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrFP8NPXLZYS71ONvPLyx2KZm9hb6hORA",
    authDomain: "fitifyme-2a6ae.firebaseapp.com",
    databaseURL: "https://fitifyme-2a6ae.firebaseio.com",
    storageBucket: "fitifyme-2a6ae.appspot.com",
    messagingSenderId: "906856555576"
  };

  firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding a New User
$("#add-user-name").on("click", function(event) {
  event.preventDefault();

  	// Grabs user input
  	var userName = $("#add-user-name").val().trim();

  // Creates local "temporary" object for holding user info
  var userAllInfo = {
    name: userName,
    age: userAge,
    gender: userGender,
    height: userHeight,
    heightCm: userHeightCm,
    weight: userWeight,
    activeSt: userActiveSt  // user activity status 
  };

  var userBasics = {
  	userID: userName,
  	userCal: userCalories
  }

  // Uploads employee data to the database
	database.ref().push();

  // Logs everything to console
  console.log(userInfo.name);
  console.log(userInfo.age);
  console.log(userInfo.gender);
  console.log(userInfo.height);
  console.log(userInfo.heightCm);
  console.log(userInfo.weight);
  console.log(userInfo.activeSt);
  
  // Alert
  alert("User Infomation successfully added");
