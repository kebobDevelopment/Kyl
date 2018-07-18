
const url = "http://localhost:8080/";
let products = [];
function getList() {
    let jsonString = '{"protocol":1,"message":{}}';
    let action = function(response){
        products = JSON.parse(response)
    }
    httpRequest(1, jsonString, action);
}
function addProduct() {
    let productName = document.getElementById("productName").value;
    let barcode =  document.getElementById("barcode").value;
    let jsonString = '{"protocol":2,"message":{"productName":"' + productName + '","barcode":"' + barcode + '"}}';
    let action = function(response) {
        let newProduct = JSON.parse(response);
        console.log(JSON.stringify(products))
        products["products"].push(newProduct);
        console.log(products)
    }
    httpRequest(2, jsonString, action);
}

function httpRequest(protocol, msg, actionResponse) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            console.log (xhttp.response);
            if (actionResponse != null) {
                actionResponse(xhttp.response); 
            }
        document.getElementById("response").innerHTML = xhttp.response;
        }
    }
    xhttp.open("POST", url, true);
    xhttp.send(msg);
};