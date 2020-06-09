const covid = require('../lib/index');

async function start(){
  const data = await fetchBrazilData(); // busca os dados na api

  printBrazilStatusFromData(); // mostra os dados no console


  async function fetchBrazilData(){
    const res = await covid.getCasesByCountry('brazil'); // faz a busca pelos dados acumulados no Brasil
  
    return res.data;
  }
  
  function printBrazilStatusFromData(){
    //utiliza o dados retornados no json para criar o modelo do relatório
    const report = 
    `
    Casos confirmados no Brasil: ${data.cases}
    Mortes no Brasil: ${data.deaths}
    Recuperados: ${data.recovered}
    Atualizado em ${data.updated_at}.
    `
  
    console.log(report);
  }
  
}


start();


/*
  Console Result:

    Casos confirmados no Brasil: 292021    
    Mortes no Brasil: 37134
    Recuperados: 378257
    Atualizado em 2020-06-09T19:33:11.000Z.

*/
