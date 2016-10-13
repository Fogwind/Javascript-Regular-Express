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

function matchTest() {
	
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
	   
	   var matches;
	   if((matches = original_text.match(regexp)) != null) {
	      if(flag_text == 'g') {
		      var b = "Matched Result: " + matches.join(",");
		      result.appendChild(document.createTextNode(b));
	      }
	      if(flag_text != 'g') {
		      var c = "Matched item and Capture group: " + matches.join(" ") + "\n" + "input: " + matches.input + "\n" + "index: " + matches.index;
			  result.appendChild(document.createTextNode(c));
	      }
	   }
	   if((matches = original_text.match(regexp)) == null) {
		   var d = "Fault matched!\n" + "Result: " + matches; 
		   result.appendChild(document.createTextNode(d));
	   }
	   
	};
}
addEventLoad(matchTest);
