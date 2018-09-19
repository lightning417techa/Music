var btnv = 0;
function Dropdown() {
var i = 0;
if (i == 0) {
i++;
document.getElementById("Dropbutton").classList.toggle("dropbtnclick");
document.getElementById("Dropbutton").classList.toggle("dropbtnpos");
document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("PlaylistDropdown").classList.toggle("show");
  document.getElementById("SearchBox").setAttribute("style", "height: 30px;");
  document.getElementById("MiniPlayer").style.setAttribute("style","display: none; width: 200px; position:relative; bottom: 0;");
  
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
       //alert("Portrait 0°");
     document.getElementById("container").setAttribute("style", "position: relative; width: 330px; min-height:480px; background: #333; overflow: auto; margin: 20px auto; border-radius: 10px; box-shadow: 0 10px 8px -8px #333; align-items: center; text-align: center;");                                                                                           
     break;      
   case 180:  
     // Portrait (Upside-down)
       //alert("Portrait (Upside Down) 180°");
     document.getElementById("container").setAttribute("style", "position: relative; width: 330px; min-height:480px; background: #333; overflow: auto; margin: 20px auto; border-radius: 10px; box-shadow: 0 10px 8px -8px #333; align-items: center; text-align: center;");
     break; 
   case -90:  
     // Landscape (Clockwise)
       //alert("Landscape (Clockwise) -90°");
     document.getElementById("container").setAttribute("style", "position: relative; width: 330px; min-height:480px; background: #333; overflow: auto; margin: 0px; left: 0; border-radius: 10px; box-shadow: 0 10px 8px -8px #333; align-items: center; text-align: center;");
     zoomOutMobile();
     break;  
   case 90:  
     // Landscape  (Counterclockwise)
       //alert("Landscape (Counter-Clockwise) 90°");
     document.getElementById("container").setAttribute("style", "position: relative; width: 330px; min-height:480px; background: #333; overflow: auto; margin: 0px; left: 0; border-radius: 10px; box-shadow: 0 10px 8px -8px #333; align-items: center; text-align: center;");
     zoomOutMobile();
     let newDiv = document.createElement("a");
     newDiv.setAttribute("style", "color: white; padding: 10px 50px; text-decoration: none; text-align: left; display: block; border-top: 0.9px solid #9B9898;");
     newDiv.innerHTML = "test " + x.title + x.duration;
     
     document.getElementById("SongBtns").appendChild(newDiv);
     break;
     }
 }
readDeviceOrientation();
window.onorientationchange = readDeviceOrientation;

function search() {
  var input, filter, ul, li, a, w;
    input = document.getElementById("SearchBox");
    filter = input.value.toUpperCase();
    ul = document.getElementById("PlaylistDropdown");
    li = ul.getElementsByTagName("li");
    for (w = 0; w < li.length; w++) {
        a = li[w].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[w].style.display = "";
        } else {
            li[w].style.display = "none";
        }
    }
}


// AUDIO CONTEXT
window.AudioContext = (window.AudioContext || 
window.webkitAudioContext || 
window.mozAudioContext || 
window.oAudioContext || 
window.msAudioContext);

if (!AudioContext) alert('This site cannot be run in your Browser. Try a recent Chrome or Firefox. ');

var audioContext = new AudioContext();
var currentBuffer  = null;

// CANVAS
var canvasWidth = window.innerWidth,  canvasHeight = 120 ;
var newCanvas   = createCanvas (canvasWidth, canvasHeight);
var context     = null;

window.onload = appendCanvas;
function appendCanvas() { document.body.appendChild(newCanvas);
                          context = newCanvas.getContext('2d'); }

// MUSIC LOADER + DECODE
function loadMusic(url) {   
    var req = new XMLHttpRequest();
    req.open( "GET", url, true );
    req.responseType = "arraybuffer";    
    req.onreadystatechange = function (e) {
          if (req.readyState == 4) {
             if(req.status == 200)
                  audioContext.decodeAudioData(req.response, 
                    function(buffer) {
                             currentBuffer = buffer;
                             displayBuffer(buffer);
                    }, onDecodeError);
             else
                  alert('error during the load.Wrong url or cross origin issue');
          }
    } ;
    req.send();
}

function onDecodeError() {  alert('error while decoding your file.');  }
// MUSIC DISPLAY
function displayBuffer(buff /* is an AudioBuffer */) {
  
  var drawLines = 500;
   var leftChannel = buff.getChannelData(0); // Float32Array describing left channel     
   var lineOpacity = canvasWidth / leftChannel.length  ;      
   context.save();
   context.fillStyle = '#080808' ;
   context.fillRect(0,0,canvasWidth,canvasHeight );
   context.strokeStyle = '#46a0ba';
   context.globalCompositeOperation = 'lighter';
   context.translate(0,canvasHeight / 2);
   //context.globalAlpha = 0.6 ; // lineOpacity ;
   context.lineWidth=1;
   var totallength = leftChannel.length;
   var eachBlock = Math.floor(totallength / drawLines);
   var lineGap = (canvasWidth/drawLines);

  context.beginPath();
   for(var i=0;i<=drawLines;i++){
      var audioBuffKey = Math.floor(eachBlock * i);
       var x = i*lineGap;
       var y = leftChannel[audioBuffKey] * canvasHeight / 2;
       context.moveTo( x, y );
       context.lineTo( x, (y*-1) );
   }
   context.stroke();
   context.restore();
}

function createCanvas ( w, h ) {
    var newCanvas = document.createElement('canvas');
    newCanvas.width  = w; newCanvas.height = h;
    return newCanvas;
};

function Shuffle() {
  var s = Math.floor(Math.random() * 22) + 1;

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
    
     let newDiv = document.createElement("a");
     newDiv.setAttribute("style", "color: white; padding: 10px 50px; text-decoration: none; text-align: left; display: block; border-top: 0.9px solid #9B9898;");
     newDiv.innerHTML = "Song: " + x.title + "Author: " + artists[i] + "Duration: " + sToTime(i.duration);
     document.getElementById("SongBtns").appendChild(newDiv);
     
     if (albumart[i] == "") {
       image.src = "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p164.png";
     } else {
       image.src = albumart[i];
     }
  
     x.src = songs[i];
     x.play();
     num = 1;
     playAudio();  
     loadMusic("https://raw.githubusercontent.com/lightning417techa/Music/master/images/lil%20dicky%20-%20freaky%20friday%20(lyrics)%20ft.%20chris%20brown.mp3");

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
