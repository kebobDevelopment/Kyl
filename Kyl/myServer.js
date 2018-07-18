let products = [];
var http = require("http");
var fs = require("fs");
const productsDB = "DBkyl.txt";
fs.readFile(productsDB, "utf8", function(err, data){
        //console.log(data + "1")
    products = JSON.parse(data)
        console.log(products["products"])
})


http.createServer(function(req, res){           //skapa server det förstår man i alla fall
    if (req.method==="POST"){
        const {headers, method, url}= req;
        let body = [];
        req.on('error', (err) => {              //nogot dumt vem vet
            console.error(err);
        }).on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {                    //a du
            body = Buffer.concat(body).toString(); //Body blir sträng
                console.log(body);
            let responseMessage = handelRequest(body);           
           

            res.writeHead(200, {
                "Content-Type": "application/json", 
                'Access-Control-Allow-Origin': '*',
            })
            res.end(responseMessage);                   //SLÖÖÖÖÖÖRp
        })


    }
}).listen (8080);                               //lysnar på allt

function handelRequest(body) {
    let result = "";
    let jsonObject = JSON.parse(body);
    switch(jsonObject.protocol) {
        case 1: 
            result = getList();
        break;
        case 2:
            result = addProduct(jsonObject.message);
        break;
    }
    return result;
}

function getList() {
   return JSON.stringify(products);
}

function addProduct(newProduct) {
    console.log(newProduct);
    products["products"].push(newProduct);
    console.log(products["products"]);
    fs.writeFile(productsDB, JSON.stringify(products), function (err){
        if (err) throw err; 
        console.log("saved");  
    } )
    return JSON.stringify(newProduct);
}