document.body.addEventListener("click", selection2);
var lastElement = null;


function selection(evt){
	if(evt.target.style.background == ""){
		evt.target.style.background = "red";
	}
	else{
		evt.target.style.background = "";
	}
}


function selection2(evt){
	if((evt.target.style.background == "red")||(evt.target.style.background == "blue")){
		evt.target.style.background = "";
        
		if(evt.target == lastElement){
			lastElement =null;
        }
  }
  else{
		console.log(evt.target.nodeName);
		if( evt.target.nodeName != "INPUT"){
			if(lastElement != null){
				lastElement.style.background = "red";
			}		
			evt.target.style.background = "blue";
			lastElement = evt.target;
		}
	}
}

function insertB(string){
	console.log(lastElement);
	if(lastElement != null){
		var para = document.createElement(element);
		var node = document.createTextNode(document.getElementById("toInsert").value);
		para.appendChild(node);
		var element = lastElement;
		lastElement.parentNode.insertBefore(para, lastElement);
   }
}


/**function pageLoaded() {
	document.body.addEventListener('click', function(e) {
		var self = e.target;
		
		if (typeof self.old_bg != "undefined") {
			e.target.style.background = self.old_bg;
			delete(self.old_bg)
		} else {
			self.old_bg = e.target.style.background;
			e.target.style.background = 'red';
		}
	});
}**/
