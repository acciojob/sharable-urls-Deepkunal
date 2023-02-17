// your code here
function buttonClick(){
	let name=document.getElementById("name").value
	let year=document.getElementById("year").value
	let url=document.getElementById("url")

	if(name!="" && year!=""){
		url.innerText="https://localhost:8080/?name="+`${name}&year=${year}`
	}
	else if(name!=""){
		url.innerText="https://localhost:8080/?name="+`${name}`
		
	}
	else if(year!=""){
		url.innerText="https://localhost:8080/?year="+`${year}`
	}
}