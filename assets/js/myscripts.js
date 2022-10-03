var container = document.getElementsByClassName("form-wrap")[0];
container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

var ans = document.getElementsByClassName("form-wrap");

var s1 = document.getElementById("s1")
var s2 = document.getElementById("s2")
var s3 = document.getElementById("s3")
var s4 = document.getElementById("s4")
var s5 = document.getElementById("s5")
console.log(s1.value)
function showStarter(){
    if(s1.value=="*" && s2.value=="G" && s3.value=="@" && s4.value=="?" && s5.value==2){
        location.replace("https://vlcolquett.github.io/escape/index");
        
    }
    
}

/*(document).keydown(function(keyPressed) {
    if (keyPressed.keyCode == 38) {
      $("body").css("background-color","tomato");
    }
   });*/