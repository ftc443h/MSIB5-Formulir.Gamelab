// Start Canvas
var canv = document.getElementById("MyCanvas");
var ctvs = canv.getContext("2d");
var grds = ctvs.createLinearGradient(0, 0, 250, 0);

grds.addColorStop(0, "orange");
grds.addColorStop(1, "Yellow");
ctvs.font = "28px Text New Roman";

ctvs.fillStyle = grds;
ctvs.fillRect(-2, -10, 320, 180);
ctvs.strokeText("Education Studio", 50, 80);
// End Canvas