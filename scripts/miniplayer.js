let MiniPlayerSwitch = 0;
function MinimizeMiniPlayer() {
 let MiniPlayer = document.getElementById("MiniPlayer");
  if (MiniPlayerSwitch == 1) {MiniPlayerSwitch = 0; document.getElementById("MiniPlayerArrow").classList.remove("fa%20fa-angle-down"); document.getElementById("MiniPlayerArrow").classList.add("fa%20fa-angle-up"); MiniPlayer.classList.remove("MiniPlayerContainer-maximize"); MiniPlayer.classList.remove("MiniPlayerContainer"); MiniPlayer.classList.add("MiniPlayerContainer-minimize");} else {MiniPlayerSwitch = 1; document.getElementById("MiniPlayerArrow").classList.remove("fa%20fa-angle-up"); MiniPlayer.classList.remove("MiniPlayerContainer-minimize"); MiniPlayer.classList.add("MiniPlayerContainer-maximize"); document.getElementById("MiniPlayerArrow").classList.add("fa%20fa-angle-down");}
}

function OpenSettings() {
  let MoreContainer = document.createElement("div");
  MoreContainer.id = "MoreContainer";
  MoreContainer.classList.toggle("NewUpdate");
  document.body.appendChild(MoreContainer); 
  
  let DarkBackground = document.createElement("div");
  DarkBackground.id = "";
  DarkBackground.classList.toggle("UpdateBackground");
  document.body.appendChild(DarkBackground);
  
  let CloseBtn = document.createElement("div");
  let CloseBtnI = document.createElement("i");
  CloseBtnI.innerHTML = '<i class="fa fa-times"></i>';
  CloseBtn.appendChild(CloseBtnI);
  CloseBtn.id = "CloseButton";    
  CloseBtn.onclick = CloseMoreContainer();
  CloseBtn.setAttribute("style", "z-index: 7; position: fixed; left: 95%; top: 3%; transform: translate(-50%, -50%); text-align: right; color: black; font-size: 20px; width: 30px; height: 30px;")  
  MoreContainer.appendChild(CloseBtn);
}

function CloseMoreContainer() {
  document.getElementById("MoreContainer").style.display = "none";
}

function SendFeedback() {
  let UpdateContainer = document.createElement("div");
  UpdateContainer.id = "hi";
  UpdateContainer.classList.toggle("NewUpdate");
  document.body.appendChild(UpdateContainer);
  
  let Updatebackground = document.createElement("div");
  Updatebackground.id = "hii";
  Updatebackground.classList.toggle("UpdateBackground");
  document.body.appendChild(Updatebackground);
  
  let FeedbackScrollController = document.createElement("div");
  FeedbackScrollController.setAttribute("style", "z-index: 7; position: fixed; left: 50%; top: 40%; transform: translate(-50%, -50%); text-align: left; color: black; font-size: 20px; width: 430px; height: 120px;")
  FeedbackScrollController.id = "hiii";
  UpdateContainer.appendChild(FeedbackScrollController);  
  
  let ex = document.createElement("div");
  ex.setAttribute("style", "z-index: 7; position: relative; left: 95%; top: 5%; transform: translate(-50%, -50%); text-align: right; color: black; font-size: 20px; width: 30px; height: 30px;")
  ex.id = "ex";
  ex.innerHTML = "X";
  ex.onclick = function() {document.getElementById("ex").style.visibility = "hidden"; document.getElementById("hi").style.visibility = "hidden"; document.getElementById("hii").style.visibility = "hidden"; document.getElementById("hiii").style.visibility = "hidden"; document.getElementById("hiiii").style.visibility = "hidden"; document.getElementById("hiiiii").style.visibility = "hidden"; document.getElementById("hiiiiii").style.visibility = "hidden";}
  UpdateContainer.appendChild(ex);  
    
  let feedbacktitle = document.createElement("div");
  let feedbacktitletext = "Send Feedback";
  feedbacktitle.id = "hiiii";
  feedbacktitle.innerHTML = feedbacktitletext.bold();
  feedbacktitle.setAttribute("style", "z-index: 7; position: fixed; left: 50%; top: 15%; transform: translate(-50%, -50%); text-align: center; color: black; font-size: 20px; width: 430px;")
  UpdateContainer.appendChild(feedbacktitle);
  
  let feedbacktxt2 = document.createElement("div");
  feedbacktxt2.id = "hiiiii";
  feedbacktxt2.innerHTML = "Help us improve by sending us feedback. Please note that we will keep your suggestions in mind, and they might even become a new feature in a later version.";  
  feedbacktxt2.setAttribute("style", "position: relative; text-align: left; color: black; font-size: 20px; width: 430px;")
  FeedbackScrollController.appendChild(feedbacktxt2);
  
  let Updatebutton = document.createElement("div");
  Updatebutton.id = "hiiiiii";
  Updatebutton.classList.toggle("UpdateCB");
  Updatebutton.style.fontSize = "xx-large";
  Updatebutton.innerHTML = "Continue";
  Updatebutton.onclick = function() {document.getElementById("ex").style.visibility = "hidden"; document.getElementById("hi").style.visibility = "hidden"; document.getElementById("hii").style.visibility = "hidden"; document.getElementById("hiii").style.visibility = "hidden"; document.getElementById("hiiii").style.visibility = "hidden"; document.getElementById("hiiiii").style.visibility = "hidden"; document.getElementById("hiiiiii").style.visibility = "hidden"; var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; window.open("mailto:rnelson009@stpaul.k12.mn.us?subject=Feedback%20On%20LanyxSoft%20Music&body=", "CNN_WindowName", strWindowFeatures);}
  UpdateContainer.appendChild(Updatebutton);  
}
