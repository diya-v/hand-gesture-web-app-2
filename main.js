Webcam.set({
    width: 400,
    height: 400,
    image_format: "png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#webcam");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("capturedImg").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}

console.log("ml5 version", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RVz95nnHU/",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}


