// JavaScript Document

console.log("reading");

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

//capture the sumbit
  document.f.onsubmit = processForm;
  document.f.onreset = test;

//define process function
  function processForm() {
    //store vname in a variable
    console.log("here")
    var vname = document.f.vname.value;
    var verbPast = document.f.verbPast.value;
    var subject = document.f.subject.value;
    var noun1 = document.f.noun1.value;
    var adj1 = document.f.adj1.value;
    var color = document.f.color.value;
    var bodyPart = document.f.bodyPart.value;
    var song = document.f.song.value;
    var holiday = document.f.holiday.value;
    var number = document.f.number.value;
    var pluralNourn = document.f.pluralNoun.value;
    console.log(vname)
    // document.body.innerHTML = "OAIJWDOIAWJAOIWDJ"
    // document.result.innerHTML = "<div id='text-field'>" +
    //  "LAIUWDHLIAUWDH" +  "</div>"
    document.getElementById('result').innerHTML = "Dear " + vname+
    ",  I still remember the first time I " + verbPast + " eyes on you. " +
    "It was during " + subject + " class, and you came in to give our " +
    "teacher a " + noun1 + ". The very first thing I noticed was your " +
    adj1 + " face, and your large " + color + " " + bodyPart + ". I even heard " +
    song + " playing in the background! Since that day, I admit I have had a " + noun1 +
    " on you! I will reveal my secret identity on " + holiday + " at " + number + " o'clock" +
    " sharp.  Love, Your Secret Admirer";
    // test()

    return false;

  }
  function test() {
    console.log("TESTING")
    document.getElementById('result').innerHTML = "";
    document.getElementById('form-f').reset();
    return false;
  }

});

// function test(event) {
//   document.removeEventListener()
// }
