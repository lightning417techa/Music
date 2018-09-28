var btnv = 0;
var update = 0;
function Dropdown() {
var i = 0;
if (i == 0) {
i++;
document.getElementById("Dropbutton").classList.toggle("dropbtnclick");
document.getElementById("Dropbutton").classList.toggle("dropbtnpos");
document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("PlaylistDropdown").classList.toggle("show");
  document.getElementById("SearchBox").setAttribute("style", "height: 30px;");
} else {
i--;
document.getElementById("Dropbutton").classList.remove("dropbtnclick");
}}

//Firebase
Function firebase() {
var config = {apiKey:"AIzaSyAz0J5c0czjU3S2PddQdFxmnd52hGHqtWQ", authDomain: "fitbit-flex2-integration.firebaseapp.com", databaseURL: "https://fitbit-flex2-integration.firebaseio.com", projectId: "fitbit-flex2-integration", storageBucket: "fitbit-flex2-integration.appspot.com", messagingSenderId: "247113062436"};
firebase.initializeApp(config);         
  let id = (0|Math.random()*9e6).toString(36)+"-"+(0|Math.random()*9e6).toString(36)+"-"+(0|Math.random()*9e6).toString(36);  
  let postData = id;   
  function UpdateFirebase() {    
     localStorage.setItem("LUDIN", id);
     let newPostKey = id;
     let updates = {};
     updates['/LanyxSoft-Music-Update/' + newPostKey] = postData;     
     return firebase.database().ref().update(updates);        
}
var db = firebase.database();
var ref = db.ref("/LanyxSoft-Music-Update");
ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();  
});

// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store   
    let LUDIN = localStorage.setItem("Updated", "true");        
    if (localStorage.getItem("LUDIN") == null) { 
       UpdateFirebase();
    } else {}    
    // Retrieve
     let UPD = localStorage.getItem("Updated");
     if (UPD == "true") {      
     } else {          
       Update();
       localStorage.setItem("Updated", "true");
     }
} else {
    alert("unfortunatly your browser doesnt support cookies. this means that some feature aren't available on this device");
}
}
//firebase();

function startUI() {    
  var SB;    
    for (SB = 0; SB < 37;) {
    SB++;
        let NewSongBtn = document.createElement("a");
        NewSongBtn.id = SB;
        NewSongBtn.setAttribute("style", "color: white; padding: 10px 50px; text-decoration: none; text-align: left; display: block; border-top: 0.9px solid #9B9898;");     
        NewSongBtn.innerHTML = titles[SB] + " -- " + artists[SB];
        NewSongBtn.onclick = function() {Playbutton(NewSongBtn.id);};
        let LI = document.createElement("li");
        LI.appendChild(NewSongBtn);
        document.getElementById("SongBtns").appendChild(LI);
    }
}
function StartUII() {
  var SB2;
    for (SB2 = 0; SB2 < 37;) {
    SB2++;
        let NewAlbumBtn = document.createElement("div");                
        NewAlbumBtn.classList.toggle("column");
        
        let NewAlbumArt = document.createElement("img");
        NewAlbumArt.src = 
        NewAlbumArt.setAttribute("style", "width: 100%");
        NewAlbumBtn.appendChild(NewAlbumArt);
      
        /*let NewAlbumP = document.createElement("p");
        NewAlbumP.innerHTML = AlbumName[SB2];
        NewAlbumBtn.appendChild(NewAlbumP);*/
                      
        document.getElementById("albums").appendChild(NewAlbumBtn);
    }
}

function Update() {  
  let UpdateContainer = document.createElement("div");
  UpdateContainer.id = "UC";
  UpdateContainer.classList.toggle("NewUpdate");
  document.body.appendChild(UpdateContainer);
  
  let Updatetxt = document.createElement("div");
  Updatetxt.id = "UTXT";
  Updatetxt.innerHTML = "Welcome to LanyxSoft Music! please note that this web player is still in beta testing mode meaning that there will most likely be issues. Thank you for you coaperation.";
  Updatetxt.classList.toggle("UpdateTXT");
  document.body.appendChild(Updatetxt);
  
  let Updatebackground = document.createElement("div");
  Updatebackground.id = "UB";
  Updatebackground.classList.toggle("UpdateBackground");
  document.body.appendChild(Updatebackground);
  
  let Updateimage = document.createElement("img");
  Updateimage.id = "UIMG";
  Updateimage.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
  Updateimage.style.width = "200px";
  Updateimage.classList.toggle("UpdateIMG");
  UpdateContainer.appendChild(Updateimage);
  
  let Updatebutton = document.createElement("div");
  Updatebutton.id = "UBTN";
  Updatebutton.classList.toggle("UpdateCB");
  Updatebutton.style.fontSize = "xx-large";
  Updatebutton.innerHTML = "Continue";
  Updatebutton.onclick = function() {document.getElementById("UTXT").style.visibility = "hidden"; document.getElementById("UIMG").style.visibility = "hidden"; document.getElementById("UC").style.visibility = "hidden"; document.getElementById("UB").style.visibility = "hidden"; document.getElementById("UBTN").style.visibility = "hidden"; startUI();}
  UpdateContainer.appendChild(Updatebutton);  
}


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

slider.oninput = function() {
  percent.innerHTML = this.value + "%";
  x.currentTime = slider.value;
}

//device orientation functions
function zoomOutMobile() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if ( viewport ) {
    viewport.content = "width=device-width, initial-scale=1.0";
  }
}

function readDeviceOrientation() {
switch (window.orientation) {  
   case 0:  
     // Portrait 
     document.getElementById("PlaylistC").style.visibility = "hidden";
     document.getElementById("PlaylistC").style.display = "none";    
     document.getElementById("container").setAttribute("style", "top: 5%; position: relative; width: 330px; min-height:480px; background: #333; overflow: auto; margin: 20px auto; border-radius: 10px; box-shadow: 0 10px 8px -8px #333; align-items: center; text-align: center;");                                                                                                    
     break;      
   case 180:  
     // Portrait (Upside-down)
     document.getElementById("PlaylistC").style.visibility = "hidden";
     document.getElementById("PlaylistC").style.display = "none";            
     document.getElementById("container").setAttribute("style", "top: 5%; position: relative; width: 330px; min-height:480px; background: #333; overflow: auto; margin: 20px auto; border-radius: 10px; box-shadow: 0 10px 8px -8px #333; align-items: center; text-align: center;");            
     break; 
   case -90:  
     // Landscape (Clockwise)         
     document.getElementById("PlaylistC").style.visibility = "visible";
     document.getElementById("PlaylistC").style.display = "block";        
     document.getElementById("container").setAttribute("style", "position: relative; width: 330px; min-height:480px; background: #333; overflow: auto; margin: 0px; left: 0; border-radius: 10px; box-shadow: 0 10px 8px -8px #333; align-items: center; text-align: center;");
     zoomOutMobile();             
     break;  
   case 90:  
     // Landscape  (Counterclockwise)     
     document.getElementById("PlaylistC").style.visibility = "visible";
     document.getElementById("PlaylistC").style.display = "block";             
     document.getElementById("container").setAttribute("style", "position: relative; width: 330px; min-height:480px; background: #333; overflow: auto; margin: 0px; left: 0; border-radius: 10px; box-shadow: 0 10px 8px -8px #333; align-items: center; text-align: center;");
     zoomOutMobile();                  
     break;
     }
 }
readDeviceOrientation();
window.onorientationchange = readDeviceOrientation;

//SEARCH
//document.getElementById("SearchBox").addEventListener("keyup",);

function search() {
  var input, filter, ui, li, a, w;
    input = document.getElementById("SearchBox");
    filter = input.value.toUpperCase();
    ui = document.getElementById("PlaylistDropdown");
    li = ui.getElementsByTagName("li");
    
    //function for dd
    for (w = 0; w < li.length; w++) {
        a = li[w].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[w].style.display = "";
        } else {
            li[w].style.display = "none";
    }}    
}
/*function searchAlbums() {
  var input, filter, ui, li, a, w;
    input = document.getElementById("SearchBox");
    filter = input.value.toUpperCase();
    ui = document.getElementById("albums");
    li = ui.getElementsByTagName("div");
    
    //function for dd
    for (w = 0; w < li.length; w++) {
        a = li[w].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[w].style.display = "";
        } else {
            li[w].style.display = "none";
    }}    
}*/


function Shuffle() {
  var s = Math.floor(Math.random() * 37) + 1;

  x.title = titles[s];
  audiotitle.innerHTML = x.title;
  audioartist.innerHTML = artists[s];
  
  if (albumart[s] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[s];
     }
  
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
     
     if (albumart[i] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[i];
     }
     
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
     
     if (albumart[i] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[i];
     }
  
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
     
     if (albumart[i] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[i];
     }
  
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
    
     if (albumart[i] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[i];
     }
  
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
      
    } else {
      x.pause();
      //text.innerHTML = "play";
      input2.style="visibility:hidden;";
      input2.style.display="none";
      input.style="visibility:visable;";
      num = 1;
      d = dateFormat + "paused";
      
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
