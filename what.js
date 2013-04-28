var What = {
	so: new WhatSo(),
	browser: new WhatBrowser()
};

function WhatSo(){
	this.name = function(){
		var name = "unknown";
		if (navigator.appVersion.indexOf("Win")!=-1){
			name = "Windows";
		}
		if (navigator.appVersion.indexOf("Mac")!=-1){
			name = "MacOS";
		}
		if (navigator.appVersion.indexOf("X11")!=-1){
			name = "Unix";
		}
		if (navigator.appVersion.indexOf("Linux")!=-1){
			name = "Linux";
		}
		console.log(name);
	},
	this.version = function(){
		var vs = navigator.userAgent.split(/\s*[;)(]\s*/), i;
		i = vs[2].split(" ");
		console.log(i[i.length-1]);

	},
	this.is = function(s){
		return compare(this.name, s);
	};
}

function WhatBrowser(){
	this.name = function(){
		console.log("Achou o Browser");
	},
	this.version = function(){
		console.log("Achou a Versao do Browser");
	},
	this.plugins = function(){
		console.log("Achou os Plugins do Browser");
	},
	this.is = function(b){
		return compare(this.name, s);
	};
}

function compare(origin, current){
	if(origin !== undefined){
		if(current == origin)
			return true;
		else return false;
	}
}