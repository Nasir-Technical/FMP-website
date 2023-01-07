let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

};

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  };

};

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
};

function fadeOut(){
  setInterval(loader, 3000);
};

window.onload = fadeOut();


document.addEventListener("DOMContentLoaded", () =>{
      function counter(id, start, end, duration){
        let obj = document.getElementById(id);
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
      }  
      counter("counter1", 0, 1287, 3000);
      counter("counter2", 100, 2085, 5000);
      counter("counter3", 0, 128367, 37000);
      counter("counter4", 0, 153487, 3052500);
});



 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAGb7klFn2xAU0XX7-QtSCglKNLqPWPod8",
   authDomain: "food-order-97236.firebaseapp.com",
   projectId: "food-order-97236",
   storageBucket: "food-order-97236.appspot.com",
   messagingSenderId: "244572424993",
   appId: "1:244572424993:web:8790465eea8681f6e00c60",
   measurementId: "G-H8PBH4JZE4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const database = getDatabase();


  
 var name = document.getElementById('name');
 var email = document.getElementById('email');
 var number = document.getElementById('number');
 var foodname = document.getElementById('foodname');
 var textarea = document.getElementById('textarea');
 

 window.saveValue = function (){
    var obj = {
        name: name.value,
        email: email.value,
        number: number.value,
        foodname: foodname.value,
        textarea: textarea.value,
    };
    console.log(obj);
    obj.id = Math.random().toString().slice(2)
    const orderRef = ref(database, `order/${obj.id}/`);
    set(orderRef,obj);
 };

 function getData() {
    var dataList = []
    const orderRef = ref(database, "order/");
    onchildAdded(orderRef, function (dt){
    dataList.push(dt.val());
    console.log(dataList);
    parent.innerHTML += '<li>${dataList[i].order}</li>'
    });
 }
 getData();