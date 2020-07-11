var xmlHttp = new XMLHttpRequest();
var url = `https://api.exchangeratesapi.io/latest`;
xmlHttp.open("GET", url, false); //false for synchronous request
xmlHttp.send(null);

var Country = JSON.parse(xmlHttp.responseText);
let countrycode =  Object.keys(Country['rates']);

var xmlHttp1 = new XMLHttpRequest();
var url1 = "https://openexchangerates.org/api/currencies.json";
xmlHttp1.open("GET", url1, false); 
xmlHttp1.send(null);
var Country1= JSON.parse(xmlHttp1.responseText);

for (c of countrycode){
    for (let [key, value] of Object.entries(Country1)){
        if(key==c){
            let x = document.getElementById("select1");
            let option = document.createElement("option");
            option.text =key + " "+value;
            x.add(option)

            let y = document.getElementById("select2");
            let option1 = document.createElement("option");
            option1.text =key + " "+value;
            y.add(option1)
        }
        else{continue;}
    }
}

function convert(){
    var c1 = document.getElementById('select1')
    var country1 = c1.options[c1.selectedIndex].text;
    var l1 = country1.split(" ")
    console.log(l1[0])

    var c2 = document.getElementById('select2')
    var country2 = c2.options[c2.selectedIndex].text;
    var l2 = country2.split(" ")
    console.log(l2[0])

    let cur = l1[0]
    let num1 = Number(document.getElementById('n1').value);
    var xmlHttp1 = new XMLHttpRequest();
    let url1 = `https://api.exchangeratesapi.io/latest?base=${cur}`;
    xmlHttp1.open( "GET", url1, false ); 
    xmlHttp1.send( null );
    let CountryBased = JSON.parse(xmlHttp1.responseText);
    let cur1 = l2[0]
    let ToCurrency = CountryBased['rates'][cur1];
    document.getElementById("n2").value = (num1 * ToCurrency).toFixed(4);


}
