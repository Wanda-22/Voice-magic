x=0;
y=0;

dcircle="";
drectangle="";

function setup() {
    canvas=createCanvas(1000,700);
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start1() {
    recognition.start();
    document.getElementById('status').innerHTML="Please Speak";
}
recognition.onresult=function(ans){
    console.log(ans);
    p=ans.results[0][0].transcript;
    document.getElementById('status').innerHTML="The speech has been recognized " + p;
    if (p=="circle" || p=="Circle") {
        x=Math.floor(Math.random()*1000);
        y=Math.floor(Math.random()*700);
        dcircle="set";
        document.getElementById('status').innerHTML="Started drawing";
    }
    if (p=="rectangle" || p=="Rectangle") {
        x=Math.floor(Math.random()*1000);
        y=Math.floor(Math.random()*700);
        drectangle="set";
        document.getElementById('status').innerHTML="Started drawing";
    }
}

function draw() {
    if (dcircle=="set") {
        circle(x,y,120);
        document.getElementById('status').innerHTML="Circle is drawn";
        dcircle="";
    }
    if (drectangle=="set") {
        rect(x,y,70,50);
        document.getElementById('status').innerHTML="Rectangle is drawn";
        drectangle="";
    }
}