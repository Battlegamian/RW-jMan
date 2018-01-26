var ChInfo = [
	{
		Mdls: [ {arch: "Mdls/BoxV.json",  img: {color: 0x00ff00}, Nom: "mChar-Idl"},
				{arch: "Mdls/BallV.json", img: {color: 0x00ff00}, Nom: "mChar-Mov"},
				{arch: "Mdls/BoxVN.json", img: {color: 0x00ff00}, Nom: "mChar-Jmp"}],
		Pos: new THREE.Vector3(0,0,0),
		Dir: new THREE.Vector3(0,0,0),
		Scl: new THREE.Vector3(1,1,1)
	},
	
];

var aFig = function(Op){
	this.lvSel = 0;
	if(Op > 0 && Op < ChInfo.length){ this.lvSel = Op - 1; }

	this.intel = {};
	this.intel.Lded = false;
	this.intel.State = "mChar-Idl";
	this.intel.Pos = ChInfo[this.lvSel].Pos;
	this.intel.Dir = ChInfo[this.lvSel].Dir;
	this.intel.Scl = ChInfo[this.lvSel].Scl;

	this.Avtrs = [];
	for(var i in ChInfo[this.lvSel].Mdls){
		GblJSONLdr(this.Avtrs, ChInfo[this.lvSel].Mdls[i], this.intel, this.Assemble);
	}
	var bPnt = 1;
}

aFig.prototype = {
// Loader
	 Assemble : function(mdl, Lst, sDta){
	 	switch(mdl.name){
	 		case "mChar-Idl":
		 		sDta.Lded = true;
	 		break;
	 		case "mChar-Mov":
	 		break;
	 		case "mChar-Jmp":
	 		break;
	 		default:
	 	}
	 },
	 Poser : function(iScr){}

// Getters
	GetPos : function(){ return this.intel.Pos; },
	GetDir : function(){ return this.intel.Dir; },
	GetScl : function(){ return this.intel.Scl; }

// Setters
// Movements
}
/*
aFig.prototype.Assemble = function(){
	 
}*/