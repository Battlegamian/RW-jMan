var Scr = new THREE.Scene();
var Cam = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10);
Cam.position.set(0,1,-2);

var Rndr = new THREE.WebGLRenderer({ antialias: true });
Rndr.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Rndr.domElement);

var Timex = new THREE.Clock();
var dTime;

var Ctls = MngInput;
Ctls.PrepInputs();

Scr.add( new THREE.GridHelper(10,1) );

//var Char = new aFig(1);



function Upd(){
	dTime = Timex.getDelta();
	if(Ky.D){ Cam.position.x += 0.1; }
	if(Ky.A){ Cam.position.x -= 0.1; }

}

function ToV(){
	requestAnimationFrame(ToV);
	Upd();
	Rndr.render(Scr, Cam); // Drw
}

ToV();