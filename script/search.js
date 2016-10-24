function addEventLoad(func) {
	var oldLoad = window.onload;
	if (typeof oldLoad != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldLoad();
			func();
		};
	}
}

function searchTest() {
	var butt = document.getElementById('submit');
	butt.onclick = function(){
		
	   var result = document.getElementById('result');
	   result.innerHTML = '';
	   
	   var flag_text = document.getElementById('flag').value;
	   //alert(flag_text);
	   var regex_text = document.getElementById('regex').value;
	   //alert(regex_text);
	   
	   var regexp;
	   if(flag_text == '') {
		   regexp = new RegExp(regex_text);
	   } else {
		   regexp = new RegExp(regex_text,flag_text);
	   }
	   //alert(regexp);
	   
	   var original_text = document.getElementById('original').value;
	   //alert(original_text);
	   
	   var matches = original_text.search(regexp);
	   if(matches!=-1) {
		   var b = "Successful match!\n" + "Begin index: " + matches;
		   result.appendChild(document.createTextNode(b));
	   } else {
		   var c = "Fault match!\n" + "Result: " + matches;
		   result.appendChild(document.createTextNode(c));
	   }
	   
	};
}
addEventLoad(searchTest);