# Projeto final {Reprograma} Conclusão de curso 🎓

Projeto final do bootcamp da reprograma em Desenvolvimento web em Back-End.

🚧 Em construção 🚧


# Bora Reciclar

![eco](https://github.com/Keitysandrade/reprograma-projeto-final/blob/main/eco.jpg)

## Pontos de coleta seletiva em Recife 
♻️ Bora reciclar é um projeto do bootcamp de Back-end da {reprograma}, em parceria com o projeto MINAs do Porto Digital. 
Essa é uma API que tem por objetivo aproximar a pessoa geradora de resíduos aos Pontos de coleta da cidade do Recife, num banco de dados com informações de localização e tipo de resíduo coletado neles.

## Contextualização

✔️ Apenas 17% dos brasileiros têm acesso à coleta seletiva pública, e mesmo o resíduo desses poucos privilegiados dificilmente é de fato reciclado. 

✔️ 50 kg de papel reciclado evitam o corte de uma árvore de eucalipto de 6 anos.

✔️ O plástico e o metal são originados do petróleo e da bauxita consecutivamente, que são recursos minerais não renováveis.

✔️ O vidro tem tempo indeterminado de decomposição.

✔️ Um litro de chorume (líquido liberado pelo lixo orgânico, quando entra em estado de decomposição) equivale a 200 litros de esgoto bruto em prejuízo à natureza.

✔️ As pilhas e baterias contém em sua composição: chumbo, cádimo, zinco e mercúrio, que podem causar ao homem problemas de disfunções renais, pulmonares, no cérebro e no coração.

Preservação do Meio Ambiente começa com pequenas atitudes diárias, que fazem toda a diferença; uma das mais importantes é a reciclagem do lixo.

## Tecnologias utilizadas

🔧 Git/Github

🔧 Node.js

🔧 MongoDB

## Pacotes utilizados

🔧 Express

🔧 Nodemon

🔧 Dotenv-safe

🔧 Mongoose

## Instruções de instalação

* Clonar o repositório
$ git clone https://github.com/Keitysandrade/reprograma-projeto-final.git

* Entrar na pasta do repositório
$ cd reprograma-projeto-final

*  Instalar as dependências
$ npm install

*  Executar o servidor
$ npm start


## Para uso da API

<!--ts-->

* Postman: para teste das funcionalidades (rotas) da API;

* Heroku.com: deploy da aplicação na web;

* MongoDB Atlas: hospedagem do banco de dados na nuvem.


## Features
- [ ] Listar os pontos de coleta.
- [ ] Pesquisar por tipo de resíduo.
- [ ] Adicionar/Cadastrar novo ponto de coleta.
- [ ] Alterar dados cadastrais por ID.
- [ ] Remover um ponto de coleta.

## Rotas

|  VERBO       |  DESCRIÇÃO                     |     ROTAS                                                       |
| ----------   |  --------------------          |   ----------                                                    |
| GET          | Listar todos os pontos         | /pontos                                                         |
| GETByResiduo | Listar um determinado resíduo  | /pontos/residuo?tipoDeResiduo=<inserir tipo de resíduo>         |
| POST         | Adicionar novo ponto           | /pontos                                                         |
| PUT          | Editar as informações pelo id  | /pontos/:id                                                     |
| DELETE       | Remover um ponto de coleta     | /pontos/:id                          |






