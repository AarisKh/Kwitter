var firebaseConfig = {
      apiKey: "AIzaSyANoFcik_z-wKLy5m-f9vMuRCqZe3zthT8",
      authDomain: "kwitter-e0eae.firebaseapp.com",
      databaseURL: "https://kwitter-e0eae-default-rtdb.firebaseio.com",
      projectId: "kwitter-e0eae",
      storageBucket: "kwitter-e0eae.appspot.com",
      messagingSenderId: "168233717308",
      appId: "1:168233717308:web:84c5a14878916b11083d39",
      measurementId: "G-9M039K054H"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
