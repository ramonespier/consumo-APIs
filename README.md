# consumo-APIs
Repositório para as demonstrações e aprendizado sobre o consumo de APIs.

As APIs possuem alguns elementos que servem à sua utilização:

- **Ponto de entrada**: é o endereço do serviço hospedado que pode ser acessado através de um navegador ou uma ferramenta de consumo de APIs. Exemplo: <https://dadosabertos.camara.leg.br/api/v2>

- **Recursos**: são serviços de dados disponíveis para consumo. Exemplo: /deputados -> <https://dadosabertos.camara.leg.br/api/v2/deputados>.

-**Parâmetros**: são informações ou filtros que servem para enviar dados da consulta ou para serem processados pela API. Os parâmetros poder ser passados para a API através da URL ou no corpo (body) da requisição. Exemplo: ?nome=bebeto -> <https://dadosabertos.camara.leg.br/api/v2/deputados/bebeto>.

- **Métodos**: são os modos de consumo de uma API, que podem ser:
    - POST: inserção (CREATE)
    - GET: consulta/leitura (READ)
    - PUT: atualização (UPDATE)
    - DELETE: deleção (DELETE)

Para este projeto, vamos usar o Node.js e o NPM (Node Package Manager):
- Node.js v20.13.0 LTS -> Long Term Suport (versão estável)

NPX -> Node Package eXecuter (Executor de pacote do Node)

- **Instalação e uso do Json Server**: <https://github.com/typicode/json-server>
    Para realizar a instalação, basta usar o comando npm 
    ~~~bash
    npm install json-server
    ~~~
    E então você precisa criar um arquivo `db.json` ou `db.json5`

    E dentro de algum deles, por o código abaixo referente ao json ou json5

- `db.Json`
~~~json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
~~~

<details>

<summary>Olhe um exemplo do db.json5</summary>


~~~bash
{
  posts: [
    { id: '1', title: 'a title', views: 100 },
    { id: '2', title: 'another title', views: 200 },
  ],
  comments: [
    { id: '1', text: 'a comment about post 1', postId: '1' },
    { id: '2', text: 'another comment about post 1', postId: '1' },
  ],
  profile: {
    name: 'typicode',
  },
}
~~~

Você pode ser mais sobre formato JSON5 [Aqui](https://github.com/json5/json5).

</details>

- **Execução do json-server**: após ter efetuado os passos anteriores, basta usar o seguinte comando no prompt de comando;

~~~bash
npx json-server db.json
~~~

Ou podemos automatizar esta execução - **Criando um script para execução do json-server**: dentro do arquivo `package.json`, gerado na instalação do json-server, usaremos às seguintes linhas de código `dentro das chaves que já estão no arquivo` 

~~~bash
"scripts": {
    "start": "npx json-server data/db.json5"
  }
~~~

Após ter feito isso, toda vez que quiser executar o json-server, basta digitar o seguinte comando no terminal:

~~~bash
npm start
~~~

- **Criação do arquivo .gitignore**: após ter efetuado os passos anteriores, crie um arquivo com o nome `.gitignore`, é um arquivo sem nome, apenas com a extensão, ele fará com que os arquivos escolhidos dentro dele, sejam ignorados, e não sejam versionados.

- Basta por o seguinte comando dentro dele:

~~~bash
/node_modules
~~~

TO-DO (documentar):
- Observações em relação ao uso de JSON5 vs. JSON: <https://github.com/json5/json5>
- Instalação das extensões para formatação de arquivo .json5
- Chamada do script start com NPM ao invés do NPX

<!-- - O que é o Chocolatey? (e porque não instalá-lo agora) -->
- **Chocolatey**: é facilitador para instalação, remoção e atualização de pacotes no sistema operacional. Estes pacotes vão desde um banco de dados, como o mysql, até ferramentas mais complexas, como o Docker.
Ele poder instalar e desinstalar qualquer pacote com um comando simples, sendo eles:

~~~bash
choco install "nomeDoPacote"
choco uninstall "nomeDoPacote"
~~~

O próprio Chocolatey mostra para o usuário o quão pesado ele é por já ter **MUITAS** informações em seu download; por isso, apenas instale se tiver certeza de que vai usar (e horas que irá esperar).

## Requisição

Para criar uma nova requisição, podemos utilizar a função fetch API.

~~~js
const requisicao = new Request('http://localhost:3000/produtos', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
});
~~~

Utilizamos `new Request()` para _instanciar_ a interface `Request()`na variável `requisicao`, de forma que ela se torna um objeto com os métodos exigidos por essa interface.

A requisição é constituída por duas partes: uma URL e um objeto JSON contendo as opções da requisição. 
- **URL** é o endereço do recurso que você deseja acessar.
- **Objeto JSON** é um objeto que pode conter informações como o método HTTP (GET, POST, PUT, DELETE, etc.), headers, body, etc.
`method` define o método da requisição (nesse caso, GET) e `headers` define os cabeçalhos da requisição. `content-type` define o tipo de conteúdo que está sendo enviado, nesse caso `application/json`.

~~~js
fetch(requisicao)
    .then(resposta => resposta.json())
    .then(resposta => { ... });
~~~

Agora, para enviar essa requisição, utilizamos a função `fetch()` que é uma função _assícroma_ que retorna uma Promise. Essa Promise é _resolvida_ (ou cumprida -- fullfilled) com o objeto `Response` que representa a resposta do servidor.

A função `then()` é utilizada para lidar com a resposta do servidor. Nesse caso estamos utilizando `then()` duas vezes: uma vez para converter a resposta em JSON, com o método `json()`do objeto `resposta`, e outra vez para lidar com a resposta em si, já que o retorno do primeiro `then()` é parâmetro de entrada do segundo `then()`.

O parâmetro de entrada de uma função `then()` é chamado de função _função de callback_. 