document.write("Loop A <br/>");
  var i;
for(i = 0; i < 31; i++) {
  document.write("My Loop:" + i + "<br/>");
}

document.write("Loop B <br/>");
var f;
for(f = 200; f > 149; f--) {
  document.write("My Loop:" + f + "<br/>");
}

document.write("Loop C <br/>");
var m;
for(m = 0; m < 100; m+=2) {
  document.write("My Loop:" + m + "<br/>");
}

document.write("Loop D <br/>");
var l;
for(l = 100; l < 5100; l+=100) {
  document.write("My Loop:" + l + "<br/>");
}

document.write("Loop E <br/>");
var c;
for(c = 0; c < 9; c++) {
  var ans= Math.pow(2,c);
  document.write("The power is:" + ans);
}
document.write("Loop F <br/>");
var c;
for(c = 0; c < 9; c++) {
  var ans= Math.sqrt(c);
  document.write("The power is:" + ans);
}
document.write("Loop G <br/>");
var ind = 0;
while(ind < 10)
  {
    var ans = Math.random(ind);
    document.write(ans + "<br/>");
    ind++;
  }
<!DOCTYPE html>
<html>
  <body>
    <h4>Where to start?   </h4>
    <input type="text" id="start" />
    
    <h4>Where to end?   </h4>
    <input type="text" id="end" />
    
    <h4>How much to jump? </h4>
    <input type="text" id="jump" />
    
    <button onclick="myLoop()" >Loop Me!     </button>
  </body>
</html>
