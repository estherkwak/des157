// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    var img_1 = document.getElementById("img_1");
    img_1.addEventListener("mouseover", function(event) {
    	img_1.src = "img/color/1face.jpg"
        if (img_1.style.opacity == "") {
            img_1.style.opacity = 1
        }
    }, false);
    img_1.addEventListener("mouseout", function(event) {
    	img_1.src = "img/1face.JPG"
    }, false)
    img_1.addEventListener("click", function(event) {
        img_1.style.transition = "opacity 0.5s linear"
		if (img_1.style.opacity == 0) {
            img_1.style.opacity = 1
		} else {
            img_1.style.opacity = 0
        }
    });
    var img_2 = document.getElementById("img_2");
    img_2.addEventListener("mouseover", function(event) {
        img_2.src = "img/color/2heart.jpg"
        if (img_2.style.opacity == "") {
            img_2.style.opacity = 1
        }
    }, false);
    img_2.addEventListener("mouseout", function(event) {
        img_2.src = "img/2heart.jpg"
    }, false);
    img_2.addEventListener("click", function(event) {
        img_2.style.transition = "opacity 0.5s linear"
        if (img_2.style.opacity == 0) {
            img_2.style.opacity = 1
        } else {
            img_2.style.opacity = 0
        }
    });
    var img_3 = document.getElementById("img_3");
    img_3.addEventListener("mouseover", function(event) {
        img_3.src = "img/color/3woman.jpg"
        if (img_3.style.opacity == "") {
            img_3.style.opacity = 1
        }
    }, false);
    img_3.addEventListener("mouseout", function(event) {
        img_3.src = "img/3woman.jpg"
    }, false);
    img_3.addEventListener("click", function(event) {
        img_3.style.transition = "opacity 0.5s linear"
        if (img_3.style.opacity == 0) {
            img_3.style.opacity = 1
        } else {
            img_3.style.opacity = 0
        }
    });
    var img_4 = document.getElementById("img_4");
    img_4.addEventListener("mouseover", function(event) {
        img_4.src = "img/color/4cup.jpg"
        if (img_4.style.opacity == "") {
            img_4.style.opacity = 1
        }
    }, false);
    img_4.addEventListener("mouseout", function(event) {
        img_4.src = "img/4cup.jpg"
    }, false);
    img_4.addEventListener("click", function(event) {
        img_4.style.transition = "opacity 0.5s linear"
        if (img_4.style.opacity == 0) {
            img_4.style.opacity = 1
        } else {
            img_4.style.opacity = 0
        }
    });
    var img_5 = document.getElementById("img_5");
    img_5.addEventListener("mouseover", function(event) {
        img_5.src = "img/color/5hand.jpg"
        if (img_5.style.opacity == "") {
            img_5.style.opacity = 1
        }
    }, false);
    img_5.addEventListener("mouseout", function(event) {
        img_5.src = "img/5hand.jpg"
    }, false);
    img_5.addEventListener("click", function(event) {
        img_5.style.transition = "opacity 0.5s linear"
        if (img_5.style.opacity == 0) {
            img_5.style.opacity = 1
        } else {
            img_5.style.opacity = 0
        }
    });


    // capture the img element by its id into a variable

    // add an eventListener for mouseover that changes the src of the
    // heart image to the image titled "love.png"

    // add an eventListener for mouseout that changes the src of the
    // heart image back to "question.png"

    // eventually add a preload array (wait for details in class)
    // then display random candy hearts on mouseover

});
