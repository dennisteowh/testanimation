
//////// MODIFY THIS /////////////

var height = 222  // height of picture in pixels
var width = 1920 // width of picture in pixels
var filename = "test-image.jpg" // filename of picture
var frame = 7 // number of frames in picture
var cyclerate = 10 // controls amount of delay between frame transitions

///////////////////////////////////

var pictureheight = String(height).concat("px")
var picturewidth = String(width).concat("px")
var framewidth = width/frame
var background = "url(".concat(filename).concat(") 0px 0px")

$.injectCSS({
    "#sprite-pic": {
        height: pictureheight,
        width: framewidth,
        background: background
    }
});

var sprite = document.getElementById("sprite-pic")

var count = 1
var position = framewidth //current position of picture

function animateSprite(cyclerate){

    if (count % cyclerate == 0){
        sprite.style.backgroundPosition = `-${position}px 0px`; 
        if (position < width)
        { position = position + framewidth;}
    else
        { position = framewidth; }

    }
 
    if (count != 0) {

        requestAnimationFrame(function(){ // call requestAnimationFrame 

            animateSprite(cyclerate)
        })
        count += 1

    } else {
        count += 1
    }
}


var movebutton = document.querySelector("#move");
movebutton.addEventListener("click", animate, false);

var stopbutton = document.querySelector("#stop");
stopbutton.addEventListener("click", reset, false);

function animate(){

  requestAnimationFrame(function(){
    animateSprite(cyclerate)

})

}

function reset(){
    count = 0
}



