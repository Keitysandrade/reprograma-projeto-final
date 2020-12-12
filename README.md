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

## Sobre os EcoPontos em Recife

![eco](https://github.com/Keitysandrade/reprograma-projeto-final/blob/main/unnamed%20(1).jpg)

A Prefeitura do Recife, a fim de melhorar a coleta dos resíduos na cidade e sua destinação adequada, lançou o projeto EcoRecife.
O projeto EcoRecife engloba todas as políticas públicas e equipamentos de limpeza urbana que atuam na cidade, assim como as ações de educação ambiental desenvolvidas pela Prefeitura, buscando aperfeiçoar a coleta domiciliar, incentivar o descarte correto do lixo reciclado e lançar o projeto das Ecoestações, que vem como um equipamento auxiliar de recebimento dos resíduos. 



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


## Schemas

| Pontos        |
| ----------    | 
| id            | 
| tipoDeResiduo | 
| bairro        | 
| endereço      |
| telefone      | 


## Rotas

|  VERBO       |  DESCRIÇÃO                     |     ROTAS                                                       |
| ----------   |  --------------------          |   ----------                                                    |
| GET          | Listar todos os pontos         | /pontos                                                         |
| GETByResiduo | Listar um determinado resíduo  | /pontos/residuo?tipoDeResiduo=<inserir tipo de resíduo>         |
| POST         | Adicionar novo ponto           | /pontos                                                         |
| PUT          | Editar as informações pelo id  | /pontos/:id                                                     |
| DELETE       | Remover um ponto de coleta     | /pontos/:id                          |

## Para melhorias futuras da API

## Referências
* Para criação do banner https://www.canva.com/
* Sobre ecoponto Recife http://ecorecife.recife.pe.gov.br/o-que-e
* Mapa utilizado para desenvolvimento do Shema http://www.ecorecife.recife.pe.gov.br/ecolocais?field_equipamento_de_coleta_tid=14
* Lista de Emojis https://gist.github.com/rxaviers/7360908 

## Agradecimentos

Não tem como não agradecer a cada uma das minhas companheiras de "sala de aula".
Cada domingo, cada desespero, cada alívio.
À Raíssa, sempre  tão presente e carinhosa. 
Às professoras e monitoras. 
Levarei essas 18 semanas comigo pra sempre, e vocês no meu coração. 
À reprograma pela oportunidade de sair da zona de conforto. É doloroso, mas necessário. O trabalho de vocês é incrível. 
Ao meu companheiro de vida, João. Que acalentou o meu choro, e me trouxe pro chão quando quis desistir.
À Theo, que me dá forças na vida. 


## Autora


                             Desenvolvido com 💜 por Keity Andrade com o apoio da {Reprograma}


![eco](https://github.com/Keitysandrade/reprograma-projeto-final/blob/main/reprograma.jpg)
utor




