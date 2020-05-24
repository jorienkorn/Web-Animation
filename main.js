/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/*elementen uit t document halen*/
var heleKruis = document.querySelector(".heleKruis");
var buttonLinks = document.querySelector("button.links");
var buttonRechts = document.querySelector("button.rechts");
var heleBody = document.querySelector(".heleBody");
var rect = document.querySelectorAll("rect");
var body = document.querySelector("body");
//var svg = document.querySelector("svg");
var i;


/*de function die uitgevoerd moet worden als I wordt ingedrukt*/
function invertDesktop(event) {
    if (event.keyCode == 73) {
        console.log(event.keyCode);
        heleBody.classList.add('invert');
    }
    if (event.keyCode == 79) {
        console.log(event.keyCode);
        heleBody.classList.remove('invert');
    }
}

/*de function die uitgevoerd moet worden als B wordt ingedrukt*/
function blendDesktop(event) {
    if (event.keyCode == 66) {
        console.log(event.keyCode);
        heleBody.classList.add('blend');
    }
    if (event.keyCode == 79) {
        console.log(event.keyCode);
        heleBody.classList.remove('blend');
    }
}

/*de function die uitgevoerd moet worden voor touch screens om invert te activeren*/
function invertMobile() {
        heleBody.classList.toggle('invert');
}

function blendMobile() {
        heleBody.classList.toggle('blend');
}


/*de function die uitgevoerd moet worden voor klik links*/
function klikLinks() {
    console.log('linker knop');
    for (i = 0; i < rect.length; i++) {
        if (rect[i].classList.contains('st0')) {
            rect[i].classList.toggle('st0evil');
        } else if (rect[i].classList.contains('st1')) {
            rect[i].classList.toggle('st1evil');
        } else if (rect[i].classList.contains('st2')) {
            rect[i].classList.toggle('st2evil');
        } else if (rect[i].classList.contains('st3')) {
            rect[i].classList.toggle('st3evil');
        } else if (rect[i].classList.contains('st4')) {
            rect[i].classList.toggle('st4evil');
        }
    }
    
    heleKruis.classList.toggle('heleKruisEvil');
    body.classList.toggle('heleBodyEvil');
}

/*de function die uitgevoerd moet worden voor klik rechts*/
function klikRechts() {
    console.log('rechter knop');
    for (i = 0; i < rect.length; i++) {
        if (rect[i].classList.contains('st0')) {
            rect[i].classList.toggle('st0holy');
        } else if (rect[i].classList.contains('st1')) {
            rect[i].classList.toggle('st1holy');
        } else if (rect[i].classList.contains('st2')) {
            rect[i].classList.toggle('st2holy');
        } else if (rect[i].classList.contains('st3')) {
            rect[i].classList.toggle('st3holy');
        } else if (rect[i].classList.contains('st4')) {
            rect[i].classList.toggle('st4holy');
        }
    }
    
    heleKruis.classList.toggle('heleKruisHoly');
    body.classList.toggle('heleBodyHoly');
}

/*events definieren en functions activeren*/
window.addEventListener('keydown', invertDesktop);
window.addEventListener('keydown', blendDesktop);
heleKruis.addEventListener('touchstart', invertMobile);
heleKruis.addEventListener('long-press', blendMobile);
buttonLinks.addEventListener('click', klikLinks);
buttonRechts.addEventListener('click', klikRechts);
