//Decalring the Different Variable and Objects for world wide data
let new_cases = document.getElementById("new_case");
//let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");

//Decalring the Different Variable and Objects for India data

let ind_new_cases = document.getElementById("new_case1");
let ind_total_death = document.getElementById("total_death1");
let ind_total_recovered = document.getElementById("total_recovered1");
let ind_total_cases = document.getElementById("total_cases2");

//let ind_new_death = document.getElementById("new_death1");

//statewise data
let table = document.getElementById('state_wise')
// Fetching the Data from the server

//Fetching the World Data
setInterval(function() {fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "9487f977f6msh812b91e6904d249p1bcf68jsn0adf1eda37e2"
    }
})
.then(response => response.json().then( data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    //new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;

})).catch(err => {
    console.log(err);
});},6000)

//Fetching the India Data
setInterval(function() {fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=India", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "9487f977f6msh812b91e6904d249p1bcf68jsn0adf1eda37e2"
	}
})
.then(response => response.json().then( data => {
	console.log(data);
	//debugger
	let country = data.latest_stat_by_country;
	 ind_total_cases.innerHTML = country[0].total_cases;
     ind_new_cases.innerHTML = country[0].new_cases;
     ind_total_death.innerHTML = country[0].total_deaths;
     ind_total_recovered.innerHTML = country[0].total_recovered;
	 //ind_new_death.innerHTML = country[0].new_deaths;
})).catch(err => {
	console.log(err);
});},6000)



//Fetching India cases data statewise
setInterval( function() { fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "9487f977f6msh812b91e6904d249p1bcf68jsn0adf1eda37e2"
	}
})
.then(response => response.json().then(data =>{
	window.x = data;
	console.log(x);
	//let total_values = data.total_values;
	let state_wise = data.state_wise
	let i =0;
	//debugger
	for(let y in x.state_wise){
		console.log(y);
		//if(y == 'Delhi'){
			let z = x.state_wise[y]
			console.log(z);
			//console.log(state_wise[i]);
			if(table.rows[i+1])
			{
				table.deleteRow(i+1);
			}
			let row = table.insertRow(i+1);
			let state_name = row.insertCell(0);
			let confirmed = row.insertCell(1);
			let active = row.insertCell(2);			
			let deaths = row.insertCell(3);
			let recovered = row.insertCell(4);			
			state_name.innerHTML = y;
			confirmed.innerHTML = z.confirmed;
			active.innerHTML = z.active;
			
			deaths.innerHTML = z.deaths;
			recovered.innerHTML = z.recovered;
			i++;
			if(i == 5){
				break;
		}
		//}
	}
}))
.catch(err => {
	console.log(err);
});}, 6000);
//Fetching The Case by Country Data
/*fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "9487f977f6msh812b91e6904d249p1bcf68jsn0adf1eda37e2"
    }
})
.then(response => response.json().then(data =>{
    console.log(data)
    let countries_stat = data.countries_stat;
//Getting all the country statistic using a loop
    for(let i = 0; i<countries_stat.length;i++){
        console.log(countries_stat[i]);
        //we will start by inserting the new rows inside our table
        let row = table.insertRow(i+1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let deaths = row.insertCell(2);
        let serious_critical = row.insertCell(3);
        let recovered_per_country = row.insertCell(4);
        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        deaths.innerHTML = countries_stat[i].deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        recovered_per_country.innerHTML = countries_stat[i].total_recovered;

    }
}))
.catch(err => {
    console.log(err);
});*/