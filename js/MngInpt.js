var Ky = {  W : false, 	 A 	 : false, S   : false, D   : false, 
			Up  : false, Dwn : false, Rgt : false, Lft : false,
			Spc : false, Q	 : false, E   : false, Shf : false };

var M = {
	Dlt : { X : 0, Y : 0 },
	Clk : { R : false, M : false, L : false },
	Pos : { X : 0, Y : 0, Px : 0, Py : 0 },
	Cli : { X : 0, Y : 0 },
	Whl : 0 };

var MngInput = {
	
	KDwn : function(event){ 
		/* 
			Up  = 38; 	W = 87; 	Space = 32;
			Lft = 37; 	A = 65; 	Q = 81;
			Dwn = 40; 	S = 83; 	E = 69;
			Rgt = 39; 	D = 68; 
		*/
		switch( event.keyCode ){
			case 87: Ky.W   = true; break;
			case 65: Ky.A   = true; break;
			case 83: Ky.S   = true; break;
			case 68: Ky.D   = true; break;

			case 38: Ky.Up  = true; break;
			case 37: Ky.Dwn = true; break;
			case 40: Ky.Rgt = true; break;
			case 39: Ky.Lft = true; break;

			case 32: Ky.Spc = true; break;
			case 81: Ky.Q   = true; break;
			case 69: Ky.E   = true; break; 
			case 16: Ky.Shf = true; break;

			default: break;
		} },
	KRel : function(event){ 
		/*	Ky.W 	= false; 
			Ky.A 	= false; 
			Ky.S 	= false; 
			Ky.D 	= false;
			Ky.Up 	= false;
			Ky.Dwn  = false;
			Ky.Rgt  = false;
			Ky.Lft  = false;
			Ky.Spc  = false; 
			Ky.Q 	= false;
			Ky.E 	= false; */
		switch( event.keyCode ){
			case 87: Ky.W   = false; break;
			case 65: Ky.A   = false; break;
			case 83: Ky.S   = false; break;
			case 68: Ky.D   = false; break;
	
			case 38: Ky.Up  = false; break;
			case 37: Ky.Dwn = false; break;
			case 40: Ky.Rgt = false; break;
			case 39: Ky.Lft = false; break;
	
			case 32: Ky.Spc = false; break;
			case 81: Ky.Q   = false; break;
			case 69: Ky.E   = false; break; 
			case 16: Ky.Shf = false; break;
	
			default: break;
		}
	},

	MMov : function(event){ 
		M.Pos.X = event.x; 
		M.Pos.Y = event.y; 
		M.Cli.X = event.clientX;
		M.Cli.Y = event.clientY;
	},
	MDwn : function(event){ 
				 if(event.button == 0){ M.Clk.L = true; } 
			else if(event.button == 1){ M.Clk.M = true; }
			else if(event.button == 2){ M.Clk.R = true; } 
	},
	MRel : function(event){ M.Clk.L = false; 
							M.Clk.M = false;
							M.Clk.R = false; 
				},
	MWhl : function(event){ M.Whl = event.deltaY; },

	PrepInputs : function(){
		document.onkeydown	  = this.KDwn;
		document.onkeyup	  = this.KRel;
		document.onmousemove  = this.MMov;
		document.onmousedown  = this.MDwn;
		document.onmouseup	  = this.MRel;
		document.onmousewheel = this.MWhl;
	},

	mVctr : function(){
		var MpX =  (M.Cli.X / window.innerWidth)  * 2 - 1;
		var MpY = -(M.Cli.Y / window.innerHeight) * 2 + 1;
		return new THREE.Vector2( MpX, MpY );
	},

	MDltaX : function(){
		var DltX = 0;
		if(M.Pos.X != 0){ 
			DltX = M.Pos.X - M.Pos.Px; 
			M.Pos.Px = M.Pos.X;
		}
		return DltX / 100;
	},
	MDltaY : function(){
		var DltY = 0;
		if(M.Pos.Y != 0){
			DltY = M.Pos.Y - M.Pos.Py;
			M.Pos.Py = M.Pos.Y;
		}
		return DltY / 100;
	},
	UpdDlts : function(){ 
		M.Dlt.X = this.MDltaX; 
		M.Dlt.Y = this.MDltaY; 
	},
	XorClk : function(){
		if(  M.Clk.R && !M.Clk.L && !M.Clk.M ){ return "R"; }
		if( !M.Clk.R &&  M.Clk.L && !M.Clk.M ){ return "L"; }
		if( !M.Clk.R && !M.Clk.L &&  M.Clk.M ){ return "M"; }
		return "N/A";
	},
}




