var xhr = null;

function initXhr(){
	xhr = new XMLHttpRequest(); 
}
initXhr();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
		maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};

function maCallback(response){
	console.log(response);
}

function onLoaded(){
	
}

function sendReq1(){
	xhr.open("get", "http://interactivelayer.com/clubic.rss", true);
	xhr.send 
	
}

/**function initXhr(){
	if (window.XMLHttpRequest) //tout navigateur modernes
		xhr = new XMLHttpRequest();
	else if (window.ActiveXObject)
			xhr = new ActiveXObject("Microsoft.XMLHTTP"); //ancienne version d'internet
	else // XMLHttpRequest non supporté par navigateur
		console.log("Votre navigateur ne supporte pas XMLHttpRequest...");
}
initXhr();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
		maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};**/