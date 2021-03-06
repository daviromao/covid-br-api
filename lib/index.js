'use-strict';

const request = require('request');

const basePath = 'https://covid19-brazil-api.now.sh';
const params = {
  method: 'GET',
  json: true
};

const Covid =  function() {
  this.version = '1.0.0'
}

// retorna os dados de todos os estados brasileiros - /api/report/v1
Covid.prototype.getAllStateCases = (callback) => {
  const path = '/api/report/v1';

  return doRequest(path, callback);
}

// retorna os dados de um estado específico - /api/report/v1/brazil/uf/sp
Covid.prototype.getCasesByUf = (uf, callback) => {
  if(!uf){
    throw new Error('UF not defined');
  }

  const path = '/api/report/v1/brazil/uf/' + uf.toUpperCase();

  return doRequest(path, callback);
}

// retorna os dados de um dia específico - /api/report/v1/brazil/20200318
Covid.prototype.getCasesByDate = (date, callback) => {
  if(!date){
    throw new Error('Date not defined');
  }
  const path = '/api/report/v1/brazil/' + date;

  return doRequest(path, callback);
}

// retorna os dados de um país específico - /api/report/v1/
Covid.prototype.getCasesByCountry = (country, callback) => {
  if(!country){
    throw new Error('Country not defined');
  }
  const path = '/api/report/v1/' + country;

  return doRequest(path, callback);
}

// retorna os dados de todos os países - /api/report/v1/countries
Covid.prototype.getAllCountriesCases = (callback) => {
  const path = '/api/report/v1/countries';

  return doRequest(path, callback)
}

// retorna o status da api - /api/status/v1
Covid.prototype.getApiStatus = (callback) => {
  const path = '/api/status/v1';

  return doRequest(path, callback);
}

doRequest = (endpoint = "", callback) => {
  const url = basePath + endpoint;

  const promise = new Promise((resolve, reject) => {

    request(url, params, (err, res, body) => {
      if (!err){
        const data = JSON.parse(JSON.stringify(body));

        resolve(data);

      }else{
        reject(new Error(err));
      }

    });

  });

  if(callback && typeof callback == 'function'){
    promise.then(callback, callback);
  }

  return promise;
}

module.exports = new Covid;
