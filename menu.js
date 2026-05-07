(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"menu_atlas_1", frames: [[802,1002,512,512],[1002,0,225,225],[0,1002,800,534],[0,0,1000,1000]]},
		{name:"menu_atlas_2", frames: [[0,0,1181,1181]]},
		{name:"menu_atlas_3", frames: [[0,0,1280,1280]]},
		{name:"menu_atlas_4", frames: [[0,0,2000,1333]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.k = function() {
	this.initialize(ss["menu_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kl = function() {
	this.initialize(ss["menu_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.initialize(ss["menu_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.initialize(img.Mapadebits12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3874,3334);


(lib.Mapadebits13 = function() {
	this.initialize(ss["menu_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits14 = function() {
	this.initialize(ss["menu_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits15 = function() {
	this.initialize(ss["menu_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.initialize(ss["menu_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits12();
	this.instance.setTransform(0,0,0.0727,0.0786);

	this.instance_1 = new lib.Mapadebits15();
	this.instance_1.setTransform(-20,0,0.363,0.2995);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("A6m6mMA1NAAAMAAAA1NMg1NAAAg");
	this.shape.setTransform(156.45,349.05);

	this.text = new cjs.Text("El pollo popcorn son pequeñas bolitas crujientes y sabrosas, perfectas para comer sin parar.", "25px 'Cooper Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 290;
	this.text.parent = this;
	this.text.setTransform(169.85,329.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1142A").s().p("A6manMAAAg1NMA1NAAAMAAAA1Ng");
	this.shape_1.setTransform(156.45,349.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,0,363,790.2);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits11();
	this.instance.setTransform(0,0,0.1876,0.1924);

	this.instance_1 = new lib.Mapadebits14();
	this.instance_1.setTransform(-14,10,0.5034,0.5609);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AeHhsIAADZMg8NAAAIAAjZ");
	this.shape.setTransform(186.7,495.575);

	this.text = new cjs.Text("Una hamburguesa de pollo dorada por fuera, suave por dentro y con un toque irresistible en cada mordida.", "25px 'Cooper Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 369;
	this.text.parent = this;
	this.text.setTransform(186.65,346.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1142A").s().p("A/ZbWMAAAg2rMA+zAAAMAAAA2rg");
	this.shape_1.setTransform(187,343.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.instance},{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,0,402.7,929.8);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits8();
	this.instance.setTransform(0,0,0.2734,0.2734);

	this.instance_1 = new lib.Mapadebits13();
	this.instance_1.setTransform(-59,36,1.5556,1.5556);

	this.text = new cjs.Text("Una cubeta de pollo crujiente, jugosa y llena de sabor que provoca desde el primer olor.", "25px 'Cooper Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 266;
	this.text.parent = this;
	this.text.setTransform(115.15,410.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("A6w6wMA1hAAAMAAAA1hMg1hAAAg");
	this.shape.setTransform(117.675,423.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1142A").s().p("A6waxMAAAg1hMA1hAAAMAAAA1hg");
	this.shape_1.setTransform(117.675,423.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,0,409,595.8);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("NOSOTROS", "60px 'Centaur'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 70;
	this.text.lineWidth = 404;
	this.text.parent = this;
	this.text.setTransform(203.75,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,407.5,98.3);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("CUPONES", "60px 'Centaur'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 70;
	this.text.lineWidth = 365;
	this.text.parent = this;
	this.text.setTransform(184.4,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368.8,87.9);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("UBICACIONES", "50px 'Centaur'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 59;
	this.text.lineWidth = 356;
	this.text.parent = this;
	this.text.setTransform(179.9,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359.9,98.3);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("MENU", "60px 'Centaur'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 70;
	this.text.lineWidth = 365;
	this.text.parent = this;
	this.text.setTransform(184.4,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368.8,87.9);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("INICIO", "60px 'Centaur'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 70;
	this.text.lineWidth = 365;
	this.text.parent = this;
	this.text.setTransform(184.4,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368.8,87.9);


// stage content:
(lib.menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.inicio.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('index.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.menu.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('menu.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.ubicaciones.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('ubicaciones.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.cupones.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('cupones.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.nosotros.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('nosotros.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_2
	this.instance = new lib.kl();
	this.instance.setTransform(0,862,3.9063,0.4748);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fotos
	this.instance_1 = new lib.Símbolo8();
	this.instance_1.setTransform(1305.9,437,1,1,0,0,0,140.9,131);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.Símbolo7();
	this.instance_2.setTransform(890.6,439.2,1,1,0,0,0,187.6,128.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.instance_3 = new lib.Símbolo6();
	this.instance_3.setTransform(440.6,416.45,1,1,0,0,0,175,175);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// barra
	this.nosotros = new lib.Símbolo5();
	this.nosotros.name = "nosotros";
	this.nosotros.setTransform(1733.15,135.5,1,1,0,0,0,203.8,49.1);
	new cjs.ButtonHelper(this.nosotros, 0, 1, 1);

	this.cupones = new lib.Símbolo4();
	this.cupones.name = "cupones";
	this.cupones.setTransform(1388.55,130.4,1,1,0,0,0,184.4,44);
	new cjs.ButtonHelper(this.cupones, 0, 1, 1);

	this.ubicaciones = new lib.Símbolo3();
	this.ubicaciones.name = "ubicaciones";
	this.ubicaciones.setTransform(1024.2,135.5,1,1,0,0,0,179.9,49.1);
	new cjs.ButtonHelper(this.ubicaciones, 0, 1, 1);

	this.menu = new lib.Símbolo2();
	this.menu.name = "menu";
	this.menu.setTransform(710.5,130.4,1,1,0,0,0,184.4,44);
	new cjs.ButtonHelper(this.menu, 0, 1, 1);

	this.inicio = new lib.Símbolo1();
	this.inicio.name = "inicio";
	this.inicio.setTransform(373.3,130.4,1,1,0,0,0,184.4,44);
	new cjs.ButtonHelper(this.inicio, 0, 1, 1);

	this.instance_4 = new lib.k();
	this.instance_4.setTransform(-57,-26,0.2648,0.2499);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECsEAS3Mk/QAAAIsdAAEisDgS2IY3AA");
	this.shape.setTransform(923.1875,120.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("ECWoAS3Mk/QAAAMAAAgltMFRRAAAMAAAAltg");
	this.shape_1.setTransform(1060.4,120.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.inicio},{t:this.menu},{t:this.ubicaciones},{t:this.cupones},{t:this.nosotros}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(821,424,1318.6999999999998,816.8);
// library properties:
lib.properties = {
	id: 'EDA225D79B6E554CA9EA2AA52BB7AFE1',
	width: 2000,
	height: 900,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits12.png?1778172398146", id:"Mapadebits12"},
		{src:"images/menu_atlas_1.png?1778172398091", id:"menu_atlas_1"},
		{src:"images/menu_atlas_2.png?1778172398091", id:"menu_atlas_2"},
		{src:"images/menu_atlas_3.png?1778172398091", id:"menu_atlas_3"},
		{src:"images/menu_atlas_4.png?1778172398091", id:"menu_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EDA225D79B6E554CA9EA2AA52BB7AFE1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;