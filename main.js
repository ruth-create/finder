status="";
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectdetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    document.getElementById(enter).value;
}

function draw(){
    image(video,0,0,380,380);
}