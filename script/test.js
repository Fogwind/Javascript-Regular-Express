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

function testTest() {
	
	var butt = document.getElementById('submit');
	butt.onclick = function(){
		
	   var result = document.getElementById('result');
	   result.innerHTML = '';
	   
	   var flag_text = document.getElementById('flag').value;
	   //alert(flag_text);
	   var regex_text = document.getElementById('regex').value;
	   //alert(regex_text);
	   
	   var original_text = document.getElementById('original').value;
	   //alert(original_text);
	   
	   var matches;
	   var regexp = new RegExp(regex_text,flag_text);
	   //alert(regexp);
	   if(flag_text.indexOf('g')!=-1) {
		   if((matches = regexp.test(original_text)) != false){
			   regexp.lastIndex = 0;
			   var count = 1;
	           while((matches = regexp.test(original_text)) != false){  
		            //results.push(matches);
		            //alert(regexp.lastIndex);
		            var b = "Matches " + count + ":\n" + "Result: " + matches  + "\n" + "lastIndex: " + regexp.lastIndex + "\n"+ "\n";
		            result.appendChild(document.createTextNode(b));
		            count++;
	            }
		   } else {
			   var d = "Fault matched!\n" + "Result: " + "false"; 
		       result.appendChild(document.createTextNode(d));
		   }				
		} else{
	   
	        if((matches = regexp.test(original_text)) == false) {
		        var f = "Fault matched!\n" + "Result: " + matches; 
		        result.appendChild(document.createTextNode(f));
	        } else {
				var g = "Matches" + " 1:\n" + "Result: " + "true"  + "\n" + "lastIndex: " + regexp.lastIndex + "\n"+ "\n";
		        result.appendChild(document.createTextNode(g));
			}
		}
	   
	};
}
addEventLoad(testTest);