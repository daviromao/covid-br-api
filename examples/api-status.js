const covid = require('../lib/index');


//promise 
covid.getApiStatus()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); // retorna o status da api


//callback
covid.getApiStatus( data => {
  console.log(data);
});


//async/await
async function printData(){
  const data = await covid.getApiStatus();

  console.log(data);
}

printData();