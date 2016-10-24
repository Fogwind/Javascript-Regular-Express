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

function splitTest() {
	
	var butt = document.getElementById('submit');
	butt.onclick = function(){
		
	   var result = document.getElementById('result');
	   result.innerHTML = '';
	   
	   var flag_text = document.getElementById('flag').value;
	   //alert(flag_text);
	   var argue_text = document.getElementById('argument').value;
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
	   
	   var matches;
	   if(argue_text !='' && typeof argue_text != "number") {alert("The second argument is not a number! Please input a number.")}
	   if(argue_text =='') {
	      matches = original_text.split(regexp);
	      for(var i=0;i<matches.length;i++) {
		     var a = matches[i];
		     var b = "Term " + i + ": " + a + "\n\n";
		     result.appendChild(document.createTextNode(b));
	     }
	   }
	   if(argue_text !='' && typeof argue_text == "number") {
		    matches = original_text.split(regexp,argue_text);
			for(var j=0;j<matches.length;j++) {
		     var c = matches[j];
		     var d = "Term " + j + ": " + a + "\n\n";
		     result.appendChild(document.createTextNode(d));
	     }
	   }
	   
	};
}
addEventLoad(splitTest);