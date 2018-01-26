
function DtR(deg) { return deg * Math.PI / 180; }

function getVtxDst(ctrPos, objPos){
	var dist = Math.sqrt( 	Math.pow(objPos.x - ctrPos.x, 2) + 
							Math.pow(objPos.y - ctrPos.y, 2) + 
							Math.pow(objPos.z - ctrPos.z, 2) );
	return dist;
}


var JLdr = new THREE.JSONLoader();
function GblJSONLdr(iScr, Entry, cbIn, callbk){
	JLdr.load( Entry.arch, function(Mdl, Mtl){
		var tMdl = new THREE.Mesh( Mdl, new THREE.MeshLambertMaterial(Entry.img) );
		tMdl.name = Entry.Nom;
		callbk( tMdl, iScr, cbIn );
	});
}