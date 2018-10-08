var btnv = 0;
var update = 0;
var NumberOfSongs = 39;
var NumberOfAlbums = 20;
var NumberOfArtists = 23;
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

window.onerror = function(error) {console.log(error, error.stack, error.lineNumber);};

function startUI() {    
  var SB;    
    for (SB = 0; SB < NumberOfSongs;) {
    SB++;
        let NewSongBtn = document.createElement("a");
        NewSongBtn.id = "SongButton" + SB;
        NewSongBtn.setAttribute("style", "color: white; padding: 10px 50px; text-decoration: none; text-align: left; display: block; border-top: 0.9px solid #9B9898;");     
        NewSongBtn.innerHTML = titles[SB] + " -- " + artists[SB];
        NewSongBtn.onclick = function() {Playbutton(NewSongBtn.id);};
        let LI = document.createElement("li");
        LI.appendChild(NewSongBtn);
        document.getElementById("SongBtns").appendChild(LI);
    }
    var n;
    for (n = 0; n < NumberOfSongs; n++) {}
    //createAlbums();
    CreateAlbums();
    //CreateArtists();
}

function CreateAlbums() {
  for(var a=0; abum.length;a++){
    let NewAlbumBtn = document.createElement("div");                
    NewAlbumBtn.classList.toggle("column");
    NewAlbumBtn.id = abum[a].title;
    NewAlbumBtn.setAttribute("style", "float: left; width: 25%; padding: 0 8px; text-align:center;align-items:center; display: inline-block; float: none;  white-space: nowrap; overflow: hidden; text-overflow:ellipsis;");     
    NewAlbumBtn.onclick = function() {PlayAlbum(NewAlbumBtn.id);};        
    let IMG = document.createElement("img");
    if (abum[a].artwork == ""){
      IMG.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
    } else {
      IMG.src = "https://images-na.ssl-images-amazon.com/images/I/41K3SuHNQpL._SS500.jpg";
    }    
    IMG.style.width = "100%";
    NewAlbumBtn.appendChild(IMG);
    let text = document.createElement("p");
    text.innerHTML = abum[a].title;
    NewAlbumBtn.appendChild(text);
    document.getElementById("albums").appendChild(NewAlbumBtn);    
  }
}

function PlayAlbum(clicked_id) {
  alert("hi");
  console.log("hi");
  Id = clicked_id;
  var AN;
  for (AN = 0; AN < NumberOfSongs;) {
    AN++;
    let SongBtn = document.getElementById("SongButton" + AN)
    let AB = SongBtn.id.replace("SongButton", "");
    console.log(AB);
    if (abum[AB].tracks[AB].title == Id) {      
      SongBtn.style.display = "";
      SongBtn.style.visibility = "visible";
    } else {                           
      console.log("id: " + Id + " AB " + AlbumSongs[AB]);
      SongBtn.style.display = "none";
      SongBtn.style.visibility = "hidden";
    }  
  }
}

function CreateArtists() {
   var CreationNumber;       
   for (CreationNumber = 0; CreationNumber < NumberOfArtists;) {
   CreationNumber++;
     if (artistlist[CreationNumber] == "") {} else {      
       let NewArtistBtn = document.createElement("div");
       NewArtistBtn.id = artistlist[CreationNumber];       
       NewArtistBtn.classList.toggle("column");
       NewArtistBtn.setAttribute("style", "float: left; width: 25%; padding: 0 8px; text-align:center;align-items:center; display: inline-block; float: none;  white-space: nowrap; overflow: hidden; text-overflow:ellipsis;");           
       //NewArtistBtn.onclick = function() {PlayArtists(NewArtistBtn.id);};
       let ArtistIMG = document.createElement("img");
       if (ArtistsImg[CreationNumber] == "") {
         ArtistIMG.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p298.png";
         ArtistIMG.style.borderRadius = "50%";
       } else {
         ArtistIMG.src = ArtistsImg[CreationNumber];
         ArtistIMG.style.borderRadius = "50%";
       }
       ArtistIMG.style.width = "150px";
       ArtistIMG.style.height = "150px";
       NewArtistBtn.appendChild(ArtistIMG);
       let text = document.createElement("p");
       text.innerHTML = artistlist[CreationNumber];
       NewArtistBtn.appendChild(text);
       document.getElementById("artists").appendChild(NewArtistBtn);
 }}}

function Update() {  
  let UpdateContainer = document.createElement("div");
  UpdateContainer.id = "UC";
  UpdateContainer.classList.toggle("NewUpdate");
  document.body.appendChild(UpdateContainer);
  
  let Updatetxt = document.createElement("div");
  Updatetxt.id = "UTXT";
  var wm = "Welcome to LanyxSoft Music!";  
  Updatetxt.innerHTML = wm.bold() + " please note that this web player is still in beta testing mode meaning that there will most likely be issues. Thank you for you coaperation.";
  Updatetxt.setAttribute("style", "z-index: 7; position: fixed; left: 50%; top: 15%; transform: translate(-50%, -50%); text-align: center; color: black; font-size: 20px; width: 430px;")
  UpdateContainer.appendChild(Updatetxt);
  
  let Updatebackground = document.createElement("div");
  Updatebackground.id = "UB";
  Updatebackground.classList.toggle("UpdateBackground");
  document.body.appendChild(Updatebackground);
  
  let UpdateScrollController = document.createElement("div");
  UpdateScrollController.setAttribute("style", "z-index: 7; position: fixed; left: 50%; top: 40%; transform: translate(-50%, -50%); text-align: left; color: black; font-size: 20px; width: 430px; height: 120px;")
  UpdateScrollController.id = "USC";
  UpdateContainer.appendChild(UpdateScrollController);  
    
  let UpdateHead = document.createElement("div");
  UpdateHead.id = "UH";
  var u = "UPDATES";
  UpdateHead.innerHTML = u.bold();
  UpdateHead.setAttribute("style", "position: relative; text-align: center; color: black; font-size: 23px; width: 430px;")
  UpdateScrollController.appendChild(UpdateHead);
  
  let Updatetxt2 = document.createElement("div");
  Updatetxt2.id = "UTXT2";
  var UTXT2B = "Automatic button creation";  
  Updatetxt2.innerHTML = UTXT2B.bold() + " makes the player's ability to load faster.";
  Updatetxt2.setAttribute("style", "position: relative; text-align: left; color: black; font-size: 20px; width: 430px;")
  UpdateScrollController.appendChild(Updatetxt2);
  
  let Updatetxt3 = document.createElement("div");
  Updatetxt3.id = "UTXT3";
  var UTXT3B = "Automatic Update notifications";  
  Updatetxt3.innerHTML = UTXT3B.bold() + " makes sure that when there's a new update, you will be notified.";
  Updatetxt3.setAttribute("style", "position: relative; text-align: left; color: black; font-size: 20px; width: 430px;")
  UpdateScrollController.appendChild(Updatetxt3);
  
  let Updatetxt4 = document.createElement("div");
  Updatetxt4.id = "UTXT4";
  let UTXT4C = "New widget at bottom";
  var UTXT4B = "More Album Art";  
  Updatetxt4.innerHTML = UTXT4B.bold() + " new and updated album art. <br>" + UTXT4C.bold() + " New widget at bottom to allow you to control the music even when selecting music.";
  Updatetxt4.setAttribute("style", "position: relative; text-align: left; color: black; font-size: 20px; width: 430px;")
  UpdateScrollController.appendChild(Updatetxt4);
  
  let Updatebutton = document.createElement("div");
  Updatebutton.id = "UBTN";
  Updatebutton.classList.toggle("UpdateCB");
  Updatebutton.style.fontSize = "xx-large";
  Updatebutton.innerHTML = "Continue";
  Updatebutton.onclick = function() {document.getElementById("UTXT").style.visibility = "hidden"; document.getElementById("UTXT2").style.visibility = "hidden"; document.getElementById("UC").style.visibility = "hidden"; document.getElementById("UB").style.visibility = "hidden"; document.getElementById("UBTN").style.visibility = "hidden"; startUI();}
  UpdateContainer.appendChild(Updatebutton);  
}

var config = {apiKey:"AIzaSyAz0J5c0czjU3S2PddQdFxmnd52hGHqtWQ", authDomain: "fitbit-flex2-integration.firebaseapp.com", databaseURL: "https://fitbit-flex2-integration.firebaseio.com", projectId: "fitbit-flex2-integration", storageBucket: "fitbit-flex2-integration.appspot.com", messagingSenderId: "247113062436"};  
firebase.initializeApp(config);  
function InitializeStartzup() {
  let id = localStorage.getItem("LUDIN");
  var ref = firebase.database().ref('LanyxSoft-Music-Update/' + id + '/updatestats');
  ref.on('value', function(snapshot) {startUI();});
}
function BeginUpdate() {    
    var postData = {};
    let id = (0|Math.random()*9e6).toString(36)+"-"+(0|Math.random()*9e6).toString(36)+"-"+(0|Math.random()*9e6).toString(36);    
    var updates = {};
    let L = localStorage.getItem("LUDIN");
    Update();
    firebase.database().ref('LanyxSoft-Music-Update/' + L).set({
      updated : "true"
    });
  
    var ref = firebase.database().ref().child('/LanyxSoft-Music-Update/'+id);
      ref.on("child_added", function(child) {
        var IDofFriends = child.val();
        if(IDofFriends == localStorage.getItem("LUDIN")) {console.log("func: child_added result: User id matches to id in accepted LanyxSoft database");} else {console.log("func: child_added result: User id  doesn't match to id in accepted LanyxSoft database");}});
        return firebase.database().ref().update(updates);
  }

function SetID() {
  let id = (0|Math.random()*9e6).toString(36)+"-"+(0|Math.random()*9e6).toString(36)+"-"+(0|Math.random()*9e6).toString(36);    
  localStorage.setItem("LUDIN", id); 
  BeginUpdate();              
}
// Check browser support
if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem("LUDIN") == null) { 
    console.log("func: SetID() result:", true);
    SetID();    
  } else {
    console.log("func: InitializeStartzup() result:", true);
    InitializeStartzup();              
  }
} else {  
  Update();
  console.log("s means that some feature aren't available on this device");
}

window.onclick = function(event, clicked_id) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
      }}}}

//labels

//buttons
var input = document.getElementById("button");
var input2 = document.getElementById("button2");
  //number vals
var num = 1;
var a = new Date();
var mt = a.getMonth() + 1;
var dy = a.getDate();
var yr = a.getFullYear();
var tm = a.getHours()+":"+a.getMinutes();
var dateFormat = mt+"/"+dy+"/"+yr+"_"+tm;
var SongNumber = 1;
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
  if (viewport) {viewport.content = "width=device-width, initial-scale=1.0";}
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
  for (w = 0; w < li.length; w++) {}
  searchAlbums();
}
function searchAlbums() {
  var input, filter, ui, divs, a, w;
  input = document.getElementById("SearchBox");
  filter = input.value.toUpperCase();
  ui = document.getElementById("albums");  
  divs = ui.getElementsByTagName("div");
    
    //function for dd
  for (w = 0; w < divs.length; w++) {
    a = divs[w].getElementsByTagName("p")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      divs[w].style.display = "";
    } else {
      divs[w].style.display = "none";
  }}
  for (w = 0; w < divs.length; w++) {}
  searchArtists();
}
function searchArtists() {
  var input, filter, ui, divs, a, w;
  input = document.getElementById("SearchBox");
  filter = input.value.toUpperCase();
  ui = document.getElementById("artists");  
  divs = ui.getElementsByTagName("div");
    
    //function for dd
  for (w = 0; w < divs.length; w++) {
    a = divs[w].getElementsByTagName("p")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      divs[w].style.display = "";
    } else {
      divs[w].style.display = "none";
  }}
}


function Shuffle() {
  var s = Math.floor(Math.random() * NumberOfSongs) + 1;

  x.title = titles[s];
  audiotitle.innerHTML = x.title;
  audioartist.innerHTML = artists[s];
  
  if (albumart[s] == "") {image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";} else {image.src = albumart[s];}
  
  x.src = songs[s];
  x.play();
  num = 1;
  playAudio();
}

function ToggleLoop() {  
}

function keys() {     
   if (x.currentTime == x.duration) {
     next();
   }
}

function MiniPlayPauseBTN() {
  let MiniBTN = document.getElementById("MiniPlayPause");
  if (num == 1) {
    MiniBTN.innerHTML = '<i class="fa fa-pause"></i>';
    playAudio();
  } else {
    MiniBTN.innerHTML = '<i class="fa fa-play"></i>';
  }
}

function next() {
     SongNumber++;
     x.title = titles[SongNumber];
     audiotitle.innerHTML = x.title;
     audioartist.innerHTML = artists[SongNumber];
     
     if (albumart[SongNumber] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[SongNumber];
     }
  
     x.src = songs[SongNumber];
     num = 1;
     playAudio();
}

function rewind() {
     SongNumber--;
     x.title = titles[SongNumber];
     audiotitle.innerHTML = x.title;
     audioartist.innerHTML = artists[SongNumber];
     
     if (albumart[SongNumber] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[SongNumber];
     }
  
     x.src = songs[SongNumber];
     num = 1;
     playAudio();
}

function Playbutton(clicked_id) {
  SongNumber = clicked_id.replace("SongButton", "");
  x.title = titles[SongNumber];
     audiotitle.innerHTML = x.title;
     audioartist.innerHTML = artists[SongNumber];
    
     if (albumart[SongNumber] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[SongNumber];
     }
  
     x.src = songs[SongNumber];
     num = 1;
     playAudio();  
}

function startup() {
    input2.style.display="none";
}
startup()

function playAudio() { 
    if (num == 1) {
      x.play();
      //text.innerHTML = "pause";
      input.style.display="none";
      input2.style="visibility:visible;";
      input2.style.display="block";
      num = 0;
      d = dateFormat + "playing";
      document.getElementById("MiniPlayPause").innerHTML='<i class="fa fa-pause"></i>';
      document.body.style.backgroundImage = "url("+albumart[SongNumber]+")";      
    } else {
      x.pause();
      //text.innerHTML = "play";
      input2.style="visibility:hidden;";
      input2.style.display="none";
      input.style="visibility:visable;";
      num = 1;
      d = dateFormat + "paused";
      document.getElementById("MiniPlayPause").innerHTML='<i class="fa fa-play"></i>';
      document.body.style.backgroundImage = "url("+albumart[SongNumber]+")";            
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

//THE TIME CONVERTER
function sToTime(t) {return padZero(parseInt((t / (60 * 60)) % 24)) + ":" + padZero(parseInt((t / (60)) % 60)) + ":" + padZero(parseInt((t) % 60));}
function padZero(v) {return (v < 10) ? "0" + v : v;}
