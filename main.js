//https://teachablemachine.withgoogle.com/models/2dCXD9D9g/
p1="";
p2="";
Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function Snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("Snapshot").innerHTML='<img id="c_1" src="'+data_uri+'">';
    });
}
console.log('ml5.version', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2dCXD9D9g/model.json',modelLoaded);

function speech(){

    synth=window.speechSynthesis;
    s1="the first prediction is"+p1;
    s2="the second prediction is"+p2;
    var utterThis= new SpeechSynthesisUtterance(s1 + s2);
    synth.speak(utterThis);
}