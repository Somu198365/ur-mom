img="";
status="";
object=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function draw(){
    image(img,0,0,600,500);
    if(status !=""){
for(i=0;i<object.length;i++){
    fill("#ff0000");
    persent=floor(object[i].confidence*100);
    text(object[i].label+" "+persent+"%",object[i].x+20,object[i].y+20);
    noFill()
    stroke("#ff0000");
    rect(object[i].x-30,object[i].y,object[i].width+100,object[i].height);
    document.getElementById("status").innerHTML="OBJECT DETECTED";
}}
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,result){
if(error){
    console.error(error);
}
console.log(result)
object=result;
}