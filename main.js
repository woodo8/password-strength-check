function hide(){
	var type = document.getElementById("input").getAttribute("type");
	if (type === "password") {
		document.getElementById("input").setAttribute("type", "text");
		document.getElementById("eye").style.display = "none";
		document.getElementById("hide").style.display = "block"
	}

	if (type === "text"){
		document.getElementById("input").setAttribute("type", "password");
		document.getElementById("hide").style.display = "none";
		document.getElementById("eye").style.display = "block";
	}
}
 function delete1(){
	document.getElementById("input").value = "";
	document.getElementById("line").style.width = "0px";
	document.getElementById("text").innerHTML = "";
}

function colors1(){
	var text = document.getElementById("input").value;
	if (text.length <= 4) {
		document.getElementById("line").style.height = "4px";
		document.getElementById("line").style.width = "33%";
		document.getElementById("line").style.transition = "all 0.5s linear";
		document.getElementById("line").style.backgroundColor = "#FF7272";
		document.getElementById("text").innerHTML = "Too Weak";
		document.getElementById("text").style.color = "#FF7272d";
	}
	else if (text.length <= 8) {
		document.getElementById("line").style.height = "4px";
		document.getElementById("line").style.width = "66%";
		document.getElementById("line").style.transition = "all 0.5s linear";
		document.getElementById("line").style.backgroundColor = "#FFA944";
		document.getElementById("text").innerHTML = "Not Bad";
		document.getElementById("text").style.color = "#FFA944";
	}
	else if (text.length <=12 || text.length >= 12) {
		document.getElementById("line").style.height = "4px";
		document.getElementById("line").style.width = "100%";
		document.getElementById("line").style.transition = "all 0.5s linear";
		document.getElementById("line").style.backgroundColor = "#38C7AB";
		document.getElementById("text").innerHTML = "Strong";
		document.getElementById("text").style.color = "#38C7AB";
	}
}