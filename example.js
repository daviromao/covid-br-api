const covidBrApi = require('./lib/index');
const covid = new covidBrApi();

/*
  covid.getAllStateCases();  retorna os dados de todos os estados brasileiros - /api/report/v1
  covid.getCasesByUf('AL');  retorna os dados de um estado específico - /api/report/v1/brazil/uf/sp
  covid.getCasesByDate('20200609'); // retorna os dados de um dia específico - /api/report/v1/brazil/20200318


  covid.getCasesByCountry('jamaica'); retorna os dados de um país específico - /api/report/v1/brazil
  covid.getAllCountriesCases();  retorna os dados de todos os países - /api/report/v1/countries
*/


//promise 
covid.getApiStatus()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); // retorna o status da api - /api/status/v1

//callback
covid.getApiStatus( data => {
  console.log(data);
});

//await
async function printData(){
  const data = await covid.getApiStatus();

  console.log(data);
}

printData();