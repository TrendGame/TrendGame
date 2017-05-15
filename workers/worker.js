//Create a setInterval which will keep hitting up the server every 5 minutes.
var axios = require('axios');
let server = '/api/worker';

var worker = function(server){
   setInterval(()=>{
        axios.get(server)
        .then(response =>{
            console.log("Success!");
        })
        .catch(error =>{
            console.log("ERROR!", server);
        });
    }, 3000);
};


module.exports.worker = worker;