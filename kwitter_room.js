
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyArqEmseJUB4Mc8Gtmia5jYS0iwdP2-b5Q",
      authDomain: "kwitter-c5403.firebaseapp.com",
      databaseURL: "https://kwitter-c5403-default-rtdb.firebaseio.com",
      projectId: "kwitter-c5403",
      storageBucket: "kwitter-c5403.appspot.com",
      messagingSenderId: "3737191553",
      appId: "1:3737191553:web:a77d8fb94022936bcaf980"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
row = "<div  class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}