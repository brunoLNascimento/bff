# Objetivo
Retornar uma listagem de Pokémons e seus tipos, e para cada tipo um hexadecimal de cor correspondente.
Exemplo:
 
No código
Essa API irá se comunicar com duas outras, uma interna, que você também desenvolverá, e outra externa, a PokéAPI. Essa sua primeira aplicação terá a função de unir e processar os dados de ambas as APIs para gerar uma resposta consolidada quando for chamada.

Para obter os dados de nome e tipo de cada Pokémon, será necessário consultar a PokéAPI.
Documentação da PokéAPI: https://pokeapi.co/
Listagem de Pokémons: https://pokeapi.co/api/v2/pokemon/
Exemplo de dados de um Pokémon (url obtida na consulta anterior): https://pokeapi.co/api/v2/pokemon/1/
Descoberto os tipos de cada Pokémon encontrado, você precisará consultar as informações de cores na outra API que você irá desenvolver.

### Rodando o sistema

```sh
$ npm install -- Instalar as dependências.
$ npm start -- Rodar o sistema.
$ npm test -- Executar os testes do sistema.
```
