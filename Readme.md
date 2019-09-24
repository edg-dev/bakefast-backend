# bakefast-backend

Projeto de back-end da aplicação BakeFast. 

1. Clonar o repositório;
2. Abrir o cmd na pasta;
3. npm install;
4. npm start;
  -> No cmd vai aparecer "API rodando...", isso significa que ela está funcionando normalmente.
  
Banco de dados local: necessita mongo instalado.
1. Baixar o mongodb;
2. Com o mongo instalado, crie uma pasta com o nome "banco" na pasta do mongo;
3. Abra um terminal (cmder) e entre na pasta bin do mongo (exemplo: cd "C:/mongo/bin");
4. Dentro da bin, inicie o mongo dentro da pasta banco: mongod --dbpath "C:/mongo/banco";
  -> Se aparecer algo como "listening on port 27017" está funcionando normal.
5. Use Robo3T ou mongo Compass pra realizar consultas.

Para alterar para banco de dados local, acesse "/config/database.js" e altere a string de conexão para "mongodb://localhost:27017/<nome do banco>", troque <nome do banco> pelo nome do banco criado na máquina.
  
Para testá-la, será necessário algum cliente REST, por exemplo o Postman.
1. Baixar o Postman;
2. Rodar a api e o banco (se for local);
3. Realizar as requisições de acordo com as rotas programadas;

Exemplo:
  -> Pegar todos os cliente: http://localhost:4000/api/cliente/ {Método GET}
  -> Adicionar um cliente: http://localhost:4000/api/cliente/ {Método POST} {necessita passar parâmetros no body}
  -> Alterar ou atualizar um cliente: http://localhost:4000/api/cliente/:id {Método PUT} {necessita passar id no link}
  -> Deletar um cliente: http://localhost:4000/api/cliente/:id {Método DELETE} {necessita passar id no link}
