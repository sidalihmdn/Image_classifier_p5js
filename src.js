let mobilenet;
let pic;
let label = '';

function modelReady(){
    console.log('model is ready !!');
    mobilenet.predict(gotResults);
}

function gotResults(error , data){
    if (error){
        console.log(error);
    }
    else{
        console.log(data[0]);
        label = data[0].label;
        mobilenet.predict(gotResults);

    }
}


function setup(){
    createCanvas(600,400);
    background(0);
    pic = createCapture(VIDEO);
    pic.hide();
    mobilenet = ml5.imageClassifier('MobileNet',pic , modelReady);
}

function draw(){
    image(pic, 0 , 0 );
    fill(0);
    textSize(50);
    text(label , 50 ,50 );
}