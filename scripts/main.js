alert("hi");
var btnv = 0;
function Dropdown() {
var i = 0;
if (i == 0) {
i++;
document.getElementById("Dropbutton").classList.toggle("dropbtnclick");
document.getElementById("Dropbutton").classList.toggle("dropbtnpos");
document.getElementById("myDropdown").classList.toggle("show");
} else {
i--;
document.getElementById("Dropbutton").classList.remove("dropbtnclick");
}}

function drop() {
}

window.onclick = function(event, clicked_id) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        //openDropdown.classList.remove('show');
       }}}}

//labels

//buttons
var input = document.getElementById("button");
var input2 = document.getElementById("button2");
//text/labels/numbers
  //number vals
var num = 1;
var a = new Date();
var mt = a.getMonth() + 1;
var dy = a.getDate();
var yr = a.getFullYear();
var tm = a.getHours()+":"+a.getMinutes();
var dateFormat = mt+"/"+dy+"/"+yr+"_"+tm;
  //labels
var audiotitle = document.getElementById("audiotitle");
var audioartist = document.getElementById("artist");
var image = document.getElementById("AlbumArt");
var x = document.getElementById("myAudio"); 
var percent = document.getElementById("currentlbl");
audiotitle.innerHTML = x.title;
//inputslider
var slider = document.getElementById("myRange");
//Firebase
var config = {
    apiKey: "AIzaSyAz0J5c0czjU3S2PddQdFxmnd52hGHqtWQ",
    authDomain: "fitbit-flex2-integration.firebaseapp.com",
    databaseURL: "https://fitbit-flex2-integration.firebaseio.com",
    projectId: "fitbit-flex2-integration",
    storageBucket: "fitbit-flex2-integration.appspot.com",
    messagingSenderId: "247113062436"
  };
  firebase.initializeApp(config);

slider.oninput = function() {
  percent.innerHTML = this.value + "%";
  x.currentTime = slider.value;
}

function Shuffle() {
  var s = Math.floor(Math.random() * 14) + 1;

  x.title = titles[s];
  audiotitle.innerHTML = x.title;
  audioartist.innerHTML = artists[s];
  image.src = albumart[s];
  x.src = songs[s];
  x.play();
  num = 1;
  playAudio();
}

var i = 1;
function keys() {
     
   if (x.currentTime == x.duration) {
     //x.src = sources.two;
     i++;
     x.title = titles[i];
     audiotitle.innerHTML = x.title;
     audioartist.innerHTML = artists[i];
     image.src = albumart[i];
     x.src = songs[i];
     x.play(); 
     num = 1;
     playAudio();
   }}

function next() {
     i++;
     x.title = titles[i];
     audiotitle.innerHTML = x.title;
     audioartist.innerHTML = artists[i];
     image.src = albumart[i];
     x.src = songs[i];
     x.play(); 
     num = 1;
     playAudio();
}

function rewind() {
     i--;
     x.title = titles[i];
     audiotitle.innerHTML = x.title;
     audioartist.innerHTML = artists[i];
     image.src = albumart[i];
     x.src = songs[i];
     x.play(); 
     num = 1;
     playAudio();
}

function Playbutton(clicked_id) {
  i = clicked_id;
  x.title = titles[i];
     audiotitle.innerHTML = x.title;
     audioartist.innerHTML = artists[i];
     image.src = albumart[i];
     x.src = songs[i];
     x.play();
     num = 1;
     playAudio();
}


function startup() {
    input2.style.display="none";
}
startup()

function playAudio() { 
    x.play();
    if (num == 1) {
      x.play();
      //text.innerHTML = "pause";
      input.style.display="none";
      input2.style="visibility:visible;";
      input2.style.display="block";
      num = 0;
      d = dateFormat + "playing";
      writeNewPost();
    } else {
      x.pause();
      //text.innerHTML = "play";
      input2.style="visibility:hidden;";
      input2.style.display="none";
      input.style="visibility:visable;";
      num = 1;
      d = dateFormat + "paused";
      writeNewPost();
    }}


    
window.addEventListener('load', function() {
  var cur = document.querySelector('#perc'),
      vid = document.querySelector('#myAudio')
      dur = document.getElementById("durationlbl");
      per = document.getElementById("currentlbl");
})
    
myAudio.addEventListener('timeupdate', function(e) {
  //current time
  per.textContent = sToTime(e.target.currentTime);
  //duraion
  dur.textContent = sToTime(e.target.duration);
  slider.value = x.currentTime;
      //percent.innerHTML = x.currentTime;
      slider.max = x.duration;
      keys();
})

function sToTime(t) {
  return padZero(parseInt((t / (60 * 60)) % 24)) + ":" +
         padZero(parseInt((t / (60)) % 60)) + ":" + 
         padZero(parseInt((t) % 60));
}
function padZero(v) {
  return (v < 10) ? "0" + v : v;
}

//Firebase Function
var ip;
$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
         .done (function(location) {
           ip = location.IPv4;
         });


function writeNewPost() {
      var postData = dateFormat + " IP of Sender " + ip + "_song-" + i;
     var PostData = {
       d : "sent from LanyxSoft Music player" };
     var newPostKey = firebase.database().ref().push().key;
     var updates = {};
     updates['/User-inputs/' + newPostKey] = postData;
     return firebase.database().ref().update(updates);
    var ref = firebase.database().ref("User-input");
ref.on("value", function(snapshot) {
    var childData = snapshot.val();
    var key = Object.keys(childData)[0];
    console.log(childData[key].id);
    var print = document.getElementbyId("print").innerHTML= childData;
});}
