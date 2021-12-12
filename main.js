mustX=0;
mustY=0;


function preload(){
 mustache= loadImage('MUS.png');
}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
  if(results.length > 0 )
  {
      console.log(results);
      mustX=results[0].pose.nose.x -15;
      mustY=results[0].pose.nose.y -0;
  }
 

}

function draw(){
   image(video,0,0,300,300);
   image(mustache,mustX,mustY,30,30);
}

function snapshot(){
save('picture.png');
}

