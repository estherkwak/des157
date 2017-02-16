// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    var cali_img = document.getElementById("cali_map");
    var SF = document.getElementById("SF");
    SF.addEventListener("mouseover", function(event) {
    	cali_img.src = "images/sf.jpg"// on mouseover, change the image to the one highlighting the city.
    }, false);
    SF.addEventListener("mouseout", function(event) {
    	cali_img.src = "images/camap.jpg" //on mouseout, change the image back to the general state map.
    }, false);

    var LA = document.getElementById("LA");
    LA.addEventListener("mouseover", function(event) {
        cali_img.src = "images/la.jpg"// on mouseover, change the image to the one highlighting the city.
    }, false);
    LA.addEventListener("mouseout", function(event) {
        cali_img.src = "images/camap.jpg" //on mouseout, change the image back to the general state map.
    }, false);

     var SJ = document.getElementById("SJ");
    SJ.addEventListener("mouseover", function(event) {
        cali_img.src = "images/sj.jpg"// on mouseover, change the image to the one highlighting the city.
    }, false);
    SJ.addEventListener("mouseout", function(event) {
        cali_img.src = "images/camap.jpg" //on mouseout, change the image back to the general state map.
    }, false);

    SF.addEventListener('mouseover', function () {
        console.log('mouseover');
        tipTimer = setTimeout(showtip, 40);
    });

    SF.addEventListener('mouseout', function () {
        console.log('mouseout');
        clearTimeout(tipTimer);
        tip.style.opacity = 0;
    });

    function showtip() {
        console.log('show tool tip');
        tip.style.opacity = 1;
    }
    SJ.addEventListener('mouseover', function () {
            console.log('mouseover');
            tipTimer = setTimeout(showtip3, 40);
        });

    SJ.addEventListener('mouseout', function () {
            console.log('mouseout');
            clearTimeout(tipTimer);
            tip3.style.opacity = 0;
        });

        function showtip3() {
            console.log('show tool tip');
            tip3.style.opacity = 1;
        }
    LA.addEventListener('mouseover', function () {
            console.log('mouseover');
            tipTimer = setTimeout(showtip2, 40);
        });

    LA.addEventListener('mouseout', function () {
            console.log('mouseout');
            clearTimeout(tipTimer);
            tip2.style.opacity = 0;
        });

        function showtip2() {
            console.log('show tool tip');
            tip2.style.opacity = 1;
        }


    // add an eventListener for mouseover that changes the src of the
    // heart image to the image titled "love.png"

    // add an eventListener for mouseout that changes the src of the
    // heart image back to "question.png"

    // eventually add a preload array (wait for details in class)
    // then display random candy hearts on mouseover

});
