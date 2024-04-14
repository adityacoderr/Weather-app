function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let city = prompt("Enter City");
let capitalizedPrompt = capitalizeFirstLetter(city);
document.querySelector(".cityName").textContent = capitalizedPrompt
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${capitalizedPrompt}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30b91a5b65msh38c7c16af535f47p164948jsn60f2709edd00',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const result =0;
var data=async ()=>{
	const response = await fetch(url, options);
	const result = await response.json();
     console.log(result);
     if(result["temp"] !== undefined){
		document.querySelector(".temp").textContent = result["temp"] + "°C";
		document.querySelector(".feel").textContent = result["feels_like"] + "°C";
		document.querySelector(".mintemp").textContent = result["min_temp"] + "°C";
		document.querySelector(".maxtemp").textContent = result["max_temp"] + "°C";
		document.querySelector(".humidity").textContent = result["humidity"];
		document.querySelector(".lastupdated").textContent = result["humidity"];
		
	}
	else{
		alert("Enter Correct Location");
	}

};

data();