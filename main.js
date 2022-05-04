noseX = 0
noseY = 0
function preload(){
moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,200);
    background("white");
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose', gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(moustache,noseX-20,noseY,40,40)
}
function modelLoaded(){
    console.log('PoseNet is initialized!');
    
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
   
    }
}
function take_snapshot(){
    save("moustachePhoto.png");
}