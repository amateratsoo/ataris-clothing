## Objectivos 🎯

- [ ] Criar uma rota de update utilizando o método `put`,
- [ ] Criar um controller (middleware) para a mesma rota,
- [ ] Criar um service para o controller da rota `put`.

## Note bem

- **Rotas**: são os caminhos da nossa aplicação.

  ex.: https://www.facebook.com/profile, olhando para essa url entendemos que dentro da app do facebook estamos na rota profile utilizando o método `get` para requisitar as informções do nosso perfil.

- **Controllers**: também podem ser chamados de middlewares, servem de pontos intermediários entre a `requisição (request)` do client e a `resposta (response)` do servidor, normalmente os utilizamos para tratar da lógica de entrada e saída do cliente/servidor e vice-versa, bem como para tratar de regras de negócio.

- **Services**: é a camada mais próxima do banco de dados, sendo assim os 'serviços' que ele oferece.

  ex.: Criar usuário 'x'.

## Dicas

- Quando utilizamos o express, todas as rotas devem ser referenciadas pela instância `Router`, só assim o express sabe que elas existem e as deixa disponível para serem consumidas.

  ex.:

  ```js
    // ESM
    import { Router } from 'express';

    const router = Router();
    
    router.get('/rota', middleware);
    router.post('/rota', middleware);
    router.delete('/rota', middleware);

    export { router };

    // Cjs
    const express = require('express');
    const router = express.Router();

    router.get('/rota', middleware);
    router.post('/rota', middleware);
    router.delete('/rota', middleware);

    module.exports = { router };
  ```

### Material de Apoio

- [Documentação do express](https://expressjs.com/)
- [Documentação do sequelize](https://sequelize.org/)
