# API Node.js com JWT

Este projeto é uma API desenvolvida em Node.js que utiliza JWT (JSON Web Tokens) para autenticação.

## Instalação

### 1. Clone o repositório
```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Navegue até o diretório do projeto
```
cd nome-do-projeto
```

### 3. Instale as dependências
```
npm install
```

### 4. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:
```env
PORT=3000
JWT_SECRET=sua_chave_secreta_aqui
```

### 5. Inicie o servidor
```
npm start
```
O servidor estará em execução e ouvindo na porta configurada.

## Endpoints

### Registro de Usuário
- **Método:** POST  
- **Rota:** `/api/register`  
- **Descrição:** Endpoint para registrar um novo usuário.  
- **Corpo da Requisição:**
```json
{
  "username": "nome_do_usuario",
  "password": "sua_senha"
}
```

### Login
- **Método:** POST  
- **Rota:** `/api/login`  
- **Descrição:** Endpoint para autenticar um usuário e retornar um token JWT.  
- **Corpo da Requisição:**
```json
{
  "username": "nome_do_usuario",
  "password": "sua_senha"
}
```
- **Resposta:**
```json
{
  "token": "seu_token_jwt"
}
```

### Acesso a Recurso Protegido
- **Método:** GET  
- **Rota:** `/api/protected`  
- **Descrição:** Endpoint para acessar um recurso protegido que requer autenticação.  
- **Cabeçalho:**
```
Authorization: Bearer seu_token_jwt
```

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

