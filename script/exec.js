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

function execTest() {
	var results = new Array()
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
	   while((matches = regexp.exec(original_text)) != null){  
		  results.push(matches);
	   }
	   
	   for(var i=0;i<results.length;i++) {
		   var a = results[i];
		   var b = "Matches " + i + ":\n" + "input: " + a.input + "\n" + "index: " + a.index + "\n" + "Matched item and Capture group: " +a.join(",") + "\n\n";
		   result.appendChild(document.createTextNode(b));
	   }
	   results = [];//清空数组
	   
	   if((matches = regexp.exec(original_text)) == null){
		   var d = "Fault matched!\n" + "Result: " + matches; 
		   result.appendChild(document.createTextNode(d));
	   }
	   
	};
}
addEventLoad(execTest);