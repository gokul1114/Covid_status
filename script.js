const initialBody = `<div class = "container main"><div class = "row"><h5 class = "col-12"><p>Current Covid Result Per Country</p></h5><input class = "col-10" type ="text" id = "input">
<input type="submit" class = "col-2" id = "submit" onclick="hitApi()"></div></div>`;

document.body.innerHTML = initialBody;

async function hitApi(){
console.log("inside hitapi");
var country= document.getElementById("input").value;
console.log(country)
document.body.innerHTML = initialBody;
let data =  await fetch('https://api.covid19api.com/dayone/country/' + country)
//console.log(data)
if(data.ok) {
let dataJson = await data.json();
printData(dataJson[dataJson.length-1]);

}
else { 
   alert("Enter corect country name")
}

}

function printData(data) {
var containerRow = document.querySelector('.row');
console.log(data)
let div = document.createElement("div");
div.setAttribute("class","col-12 result");
div.innerHTML = `<div class="card">
<div class="card-body">
  <h5 class="card-title">${data.Country}</h5>
  <h6 class="card-text">Date : ${data.Date}</h6>
  <h6 class="card-text">Confirmed : ${data.Confirmed}</h6>
  <h6 class="card-text">Active : ${data.Active}</h6>
  <h6 class="card-text">Deaths : ${data.Deaths}</h6>
  <h6 class="card-text">Recovered : ${data.Recovered}</h6>
</div>
</div>`
containerRow.appendChild(div);
}