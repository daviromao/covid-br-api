const covidBrApi = require('./');

const covid = new covidBrApi();


covid.getAllStateCases(); // retorna os dados de todos os estados brasileiros - /api/report/v1
covid.getCasesByUf(); // retorna os dados de um estado específico - /api/report/v1/brazil/uf/sp
covid.getCasesByDate(); // retorna os dados de um dia específico - /api/report/v1/brazil/20200318

covid.getCasesByCountry(); // retorna os dados de um país específico - /api/report/v1/brazil
covid.getAllCountriesCases(); // retorna os dados de todos os países - /api/report/v1/countries

covid.getApiStatus(); // retorna o status da api - /api/status/v1
