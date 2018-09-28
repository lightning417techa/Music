(function (logger) {console.old = console.log; console.log = function () {
          var output = "", arg, i;
          for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";
            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            } output += "</span>&nbsp;"; }
        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };})(document.getElementById("logger"));
// Testing
var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;    
console.log(orientation);     
console.log("Hi!", {a:3, b:6}, 42, true);
console.log("Multiple", "arguments", "here");
console.log(null, undefined);
console.log(navigator.platform,navigator.userAgent, new Date());
console.log("Platform:", navigator.platform);
console.log("is online:", navigator.onLine);
console.log("device language:", navigator.language);	
				    
function resize()
{
  var heights = window.innerHeight;
  document.getElementById("MRC").style.height = heights - 10% + "px";
}
resize();
window.onresize = function() {
  resize();
};
