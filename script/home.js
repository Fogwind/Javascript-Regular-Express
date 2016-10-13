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

function hook(event) {
	event = event || window.event;
	var target = event.target;
	switch(target.id){
		case "exechook":
		exec.style.display = "block";
		test.style.display = "none";
		search.style.display = "none";
		replace.style.display = "none";
		match.style.display = "none";
		split.style.display = "none";
		break;
		
		case "testhook":
		exec.style.display = "none";
		test.style.display = "block";
		search.style.display = "none";
		replace.style.display = "none";
		match.style.display = "none";
		split.style.display = "none";
		break;
		
		case "searchhook":
		exec.style.display = "none";
		test.style.display = "none";
		search.style.display = "block";
		replace.style.display = "none";
		match.style.display = "none";
		split.style.display = "none";
		break;
		
		case "replacehook":
		exec.style.display = "none";
		test.style.display = "none";
		search.style.display = "none";
		replace.style.display = "block";
		match.style.display = "none";
		split.style.display = "none";
		break;
		
		case "matchhook":
		exec.style.display = "none";
		test.style.display = "none";
		search.style.display = "none";
		replace.style.display = "none";
		match.style.display = "block";
		split.style.display = "none";
		break;
		
		case "splithook":
		exec.style.display = "none";
		test.style.display = "none";
		search.style.display = "none";
		replace.style.display = "none";
		match.style.display = "none";
		split.style.display = "block";
		break;
		
	}

}

function displayExplain() {
	var exec = document.getElementById("exec");
	var test = document.getElementById("test");
	var search = document.getElementById("search");
	var replace = document.getElementById("replace");
	var match = document.getElementById("match");
	var split = document.getElementById("split");
	exec.style.display = "block";
	test.style.display = "none";
	search.style.display = "none";
	replace.style.display = "none";
	match.style.display = "none";
	split.style.display = "none";
	var nav = document.getElementById("nav");
	nav.addEventListener("click",hook,false);//注意第二个参数如果是函数声明，则不加括号
	
	
}

addEventLoad(displayExplain);
