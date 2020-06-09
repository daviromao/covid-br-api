'use-strict';

const request = require('request');
const basePath = 'https://covid19-brazil-api.now.sh';

class Covid{

  // retorna os dados de todos os estados brasileiros - /api/report/v1
  getAllStateCases(callback){
    const path = '/api/report/v1';

    this.request(path);
  }

  // retorna os dados de um estado específico - /api/report/v1/brazil/uf/sp
  getCasesByUf(){
    const path = '/api/report/v1/uf/';
  }

  // retorna os dados de um dia específico - /api/report/v1/brazil/20200318
  getCasesByDate(){
    const path = '/api/report/v1/brazil/';
  }

  // retorna os dados de um país específico - /api/report/v1/brazil
  getCasesByCountry(){
    const path = '/api/report/v1/brazil';
  }

  // retorna os dados de todos os países - /api/report/v1/countries
  getAllCountriesCases(){
    const path = '/api/report/v1/countries';
  }

  // retorna o status da api - /api/status/v1
  getApiStatus(){
    const path = '/api/status/v1';
  }

}

Covid.prototype.params = {
  method: 'GET',
  parser: 'json',
  json: true
}

Covid.prototype.request = (endpoint = "", callback) => {
    const url = basePath + endpoint;


    request(url, this.params, (err, res, body) => {

    });
}
