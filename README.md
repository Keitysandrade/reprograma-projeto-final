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

## Para uso da API
=================
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

## Rotas HTTP
A API está sendo escutada na porta 8080 e para que todas as rotas possam ser acessadas é necessário usar http://localhost:8080/ antes dos endpoints de requisição.

CREAT (método post) /ponto  -adicionar ponto de coleta;

READ (método get) /ponto-de-coleta - lista de todos os ponto de coleta;

READ (método get) /ponto-de-coleta/?bairro=<nome-do-bairro> - Pontos de coleta por bairro;

READ (método get) /ponto-de-coleta/?tiporesiduo=<nome-do-residuo> - Ponto de coleta por resíduo;

UPDATE (método put) /ponto-de-coleta/:_id - atualização de cadastro de ponto de coleta por id

DELETE (método delete) /ponto-de-coleta/:_id - Remoção de ponto de coleta por id
