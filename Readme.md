# BakeFast-api

Api feita em Node.js e MongoDB com integrações com a AWS S3, Google Firebase Messaging Cloud.

A api foi criada no padrão REST para satisfazer as operações e manipulação de dados realizadas na aplicação cliente.

Bibliotecas: 
* node-restful: facilitar a criação de rotas padrão e interceptação para middlewares(criptografia de senhas, autenticação de api);
* mongoose: realizar conexão e manipular objetos-modelo no banco de dados MongoDB;
* bcrypt: criptografia de senhas;
* multer & multer s3: upload de imagens;
* aws-sdk: armazenamento de imagens no Amazon Web Services S3;
* fireabase: notificacões push com o Firebase Messaging Cloud (FCM).
