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
    document.getElementById("user_name").innerHTML="welcome "+user_name;

function addroom(){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
