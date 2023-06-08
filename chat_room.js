// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyDF1FibF6aqyqERDpLq8poObPSaxHVQ7Jo",
    authDomain: "letschat-949f8.firebaseapp.com",
    projectId: "letschat-949f8",
    storageBucket: "letschat-949f8.appspot.com",
    messagingSenderId: "116199521039",
    appId: "1:116199521039:web:a4d715153f9457e8a59c7a",
    measurementId: "G-0ZBHYSPX4N"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



