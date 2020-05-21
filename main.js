/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/*elementen uit t document halen*/
var heleKruis = document.querySelector("#heleKruis");

/*de function die uitgevoerd moet worden*/
function parallex(event) {
    if(event.keyCode == 38) {
        console.log(event.keyCode);
        heleKruis.classList.add('zoomIn');
        heleKruis.classList.remove('zoomOut');
    }
    if(event.keyCode == 40) {
        console.log(event.keyCode);
        heleKruis.classList.add('zoomOut');
        heleKruis.classList.remove('zoomIn');
    }
}

/*event definieren en function startten*/
window.addEventListener('keydown', parallex);


