let MiniPlayerSwitch = 0;
function MinimizeMiniPlayer() {
 let MiniPlayer = document.getElementById("MiniPlayer");
  if (MiniPlayerSwitch == 1) {MiniPlayerSwitch = 0; document.getElementById("MiniPlayerArrow").classList.remove("fa%20fa-angle-down"); document.getElementById("MiniPlayerArrow").classList.add("fa%20fa-angle-up"); MiniPlayer.classList.remove("MiniPlayerContainer-maximize"); MiniPlayer.classList.remove("MiniPlayerContainer"); MiniPlayer.classList.add("MiniPlayerContainer-minimize");} else {MiniPlayerSwitch = 1; document.getElementById("MiniPlayerArrow").classList.remove("fa%20fa-angle-up"); MiniPlayer.classList.remove("MiniPlayerContainer-minimize"); MiniPlayer.classList.add("MiniPlayerContainer-maximize"); document.getElementById("MiniPlayerArrow").classList.add("fa%20fa-angle-down");}
}

function OpenSettings() {
  let betatxt = " Beta"; let beta = betatxt.bold();
  
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
  CloseBtn.onclick = function() {MoreContainer.style.display = "none"; DarkBackground.style.display = "none";};
  MoreContainer.style.display = "block";
  CloseBtn.setAttribute("style", "z-index: 7; position: fixed; left: 95%; top: 3%; transform: translate(-50%, -50%); text-align: right; color: black; font-size: 20px; width: 30px; height: 30px;")  
  MoreContainer.appendChild(CloseBtn);
 
  let MoreScrollController = document.createElement("div");
  MoreScrollController.setAttribute("style", "z-index: 7; position: fixed; left: 50%; top: 40%; transform: translate(-50%, -50%); text-align: left; color: black; font-size: 20px; width: 430px; height: 120px;")
  MoreScrollController.id = "USC";
  MoreContainer.appendChild(MoreScrollController);  
 
 //SEND FEEDBACK
  let SendFeedbackBtn = document.createElement("div");
  SendFeedbackBtn.innerHTML = '<i class="fa fa-question-circle-o"></i>' + " Send Us Feedback to let us know what we can do better. You can also request new features.";
  SendFeedbackBtn.setAttribute("style", "position: relative; text-align: left; color: black; font-size: 20px; width: 430px;");
  SendFeedbackBtn.onclick = function() {SendFeedback();};
  MoreScrollController.appendChild(SendFeedbackBtn);
 
 //NIGHT MODE
  let NightModeBtn = document.createElement("div");
  NightModeBtn.innerHTML = '<i class="fa fa-moon-o"></i>' + beta + " Turn Night Mode on to reduce the amount of bright light/colors on the player.";
  NightModeBtn.setAttribute("style", "position: relative; text-align: left; color: black; font-size: 20px; width: 430px;");
  NightModeBtn.onclick = function() {console.log("Night mode was toggled" + true);};
  MoreScrollController.appendChild(NightModeBtn); 
 
  let AboutBtn = document.createElement("div");
  AboutBtn.innerHTML = '<i class="fa fa-info-circle"></i>' + " About LanyxSoft Music.";
  AboutBtn.setAttribute("style", "position: relative; text-align: left; color: black; font-size: 20px; width: 430px;");
  AboutBtn.onclick = function() {About();};
  MoreScrollController.appendChild(AboutBtn); 
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
  ex.onclick = function() {UpdateContainer.style.display = "none"; Updatebackground.style.display = "none";}
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
  Updatebutton.onclick = function() {UpdateContainer.style.display = "none"; Updatebackground.style.display = "none"; var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; window.open("mailto:rnelson009@stpaul.k12.mn.us?subject=Feedback%20On%20LanyxSoft%20Music&body=", "CNN_WindowName", strWindowFeatures);};
  UpdateContainer.appendChild(Updatebutton);  
}

function About() {
  let AboutContainer = document.createElement("div");
  AboutContainer.id = "hi";
  AboutContainer.classList.toggle("NewUpdate");
  document.body.appendChild(AboutContainer);
  
  let Aboutbackground = document.createElement("div");
  Aboutbackground.id = "hii";
  Aboutbackground.classList.toggle("UpdateBackground");
  document.body.appendChild(Aboutbackground);
  
  let AboutScrollController = document.createElement("div");
  AboutScrollController.setAttribute("style", "z-index: 7; position: fixed; left: 50%; top: 40%; transform: translate(-50%, -50%); text-align: left; color: black; font-size: 20px; width: 430px; height: 120px;")
  AboutScrollController.id = "hiii";
  AboutContainer.appendChild(AboutScrollController);  
  
  let ex = document.createElement("div");
  ex.setAttribute("style", "z-index: 7; position: relative; left: 95%; top: 5%; transform: translate(-50%, -50%); text-align: right; color: black; font-size: 20px; width: 30px; height: 30px;")
  ex.id = "ex";
  ex.innerHTML = "X";
  ex.onclick = function() {AboutContainer.style.display = "none"; Aboutbackground.style.display = "none";}
  AboutContainer.appendChild(ex);  
    
  let AboutTitle = document.createElement("div");
  let AboutTitleText = "About LanyxSoft Music";
  AboutTitle.id = "";
  AboutTitle.innerHTML = AboutTitleText.bold();
  AboutTitle.setAttribute("style", "z-index: 7; position: fixed; left: 50%; top: 15%; transform: translate(-50%, -50%); text-align: center; color: black; font-size: 20px; width: 430px;")
  AboutContainer.appendChild(AboutTitle);
  
  let feedbacktxt2 = document.createElement("div");
  feedbacktxt2.id = "hiiiii";
  feedbacktxt2.innerHTML = "Help us improve by sending us feedback. Please note that we will keep your suggestions in mind, and they might even become a new feature in a later version.";  
  feedbacktxt2.setAttribute("style", "position: relative; text-align: left; color: black; font-size: 20px; width: 430px;")
  AboutScrollController.appendChild(feedbacktxt2);
  
  let AboutCloseButton = document.createElement("div");
  AboutCloseButton.id = "AboutCloseBTN";
  AboutCloseButton.classList.toggle("UpdateCB");
  AboutCloseButton.style.fontSize = "xx-large";
  AboutCloseButton.innerHTML = "Ok";
  AboutCloseButton.onclick = function() {AboutContainer.style.display = "none"; Aboutbackground.style.display = "none"; ,location=yes,resizable=yes,scrollbars=yes,status=yes"; window.open("mailto:rnelson009@stpaul.k12.mn.us?subject=Feedback%20On%20LanyxSoft%20Music&body=", "CNN_WindowName", strWindowFeatures);};
  AboutContainer.appendChild(AboutCloseButton);  
}
