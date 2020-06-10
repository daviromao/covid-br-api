<div align="center">
  <img src="https://i.imgur.com/wz5gJkG.png" width="80px"/></br>
  <sup>art by: Vinicius Aranda</sup>
  <h1>COVID BR API</h1>
</div>
<p align="center">
Api desenvolvida para buscar pelos dados no Brasil e no mundo. (Node.js)
</p>

## Instalação
```bash
npm install --save covid-br-api
```

## Como utilizar
A api aceita promise, callback function ou async/await function.

Exemplos de utilização da api em [examples](./examples).
```js
const covid = require('covid-br-api');

// retorna os dados de todos os estados brasileiros
covid.getAllStateCases('canada')
  .then( (data) => {
      //code
    }
  ); 
  
// retorna os dados de um estado específico
covid.getCasesByUf('AL')
  .then( (data) => {
      //code
    }
  ); 

// retorna os dados de um país específico (formato de entrada: yyyymmdd)
covid.getCasesByDate('20200609')
  .then( (data) => {
      //code
    }
  ); 

// retorna os dados de um país específico
covid.getCasesByCountry('canada')
  .then( (data) => {
      //code
    }
  ); 

// retorna os dados de todos os países 
covid.getAllCountriesCases( (data) => {
  //code
  }
));

```

## Autor
| [<img src="https://avatars3.githubusercontent.com/u/53953664?s=115&v=4"><br><sub>@daviromao</sub>](https://github.com/daviromao) |
| :---: |

## Contribuições
Contribuições são sempre bem vindas, independente do tamanho da sua contribuição.

Para saber mais acesse a [CONTRIBUTING.md](./CONTRIBUTING.md)

## License
[MIT - License](./LICENSE)
