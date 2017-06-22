var xhr = null;
function initXhr(){
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
		maCallback(xhr.rsponseText); // ou maCallback(xhr.responseXML);
};

function maCallback(response){
	console.log(response);
}

function onLoaded(){
	
}