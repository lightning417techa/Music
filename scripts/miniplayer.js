let MiniPlayerSwitch = 0;
function MinimizeMiniPlayer() {
 let MiniPlayer = document.getElementById("MiniPlayer");
  if (MiniPlayerSwitch == 1) {MiniPlayerSwitch = 0; document.getElementById("MiniPlayerArrow").classList.remove("fa%20fa-angle-down"); document.getElementById("MiniPlayerArrow").classList.add("fa%20fa-angle-up"); MiniPlayer.classList.remove("MiniPlayerContainer-maximize"); MiniPlayer.classList.remove("MiniPlayerContainer"); MiniPlayer.classList.add("MiniPlayerContainer-minimize");} else {MiniPlayerSwitch = 1; document.getElementById("MiniPlayerArrow").classList.remove("fa%20fa-angle-up"); MiniPlayer.classList.remove("MiniPlayerContainer-minimize"); MiniPlayer.classList.add("MiniPlayerContainer-maximize"); document.getElementById("MiniPlayerArrow").classList.add("fa%20fa-angle-down");}
}
