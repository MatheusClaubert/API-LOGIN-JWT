API Node.js com JWT
Este projeto é uma API desenvolvida em Node.js que utiliza JWT (JSON Web Tokens) para autenticação. A API oferece endpoints para registro de usuários, login, e acesso a recursos protegidos.

Índice
Instalação
Uso
Endpoints
Tecnologias
Contribuição
Licença
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:

bash
Copiar código
cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

env
Copiar código
PORT=3000
JWT_SECRET=sua_chave_secreta
Inicie o servidor:

bash
Copiar código
npm start
Uso
Após iniciar o servidor, a API estará disponível em http://localhost:3000.

Registro de Usuário
http
Copiar código
POST /api/register
Corpo da Requisição:

json
Copiar código
{
  "username": "seu-usuario",
  "password": "sua-senha"
}
Login
http
Copiar código
POST /api/login
Corpo da Requisição:

json
Copiar código
{
  "username": "seu-usuario",
  "password": "sua-senha"
}
Resposta:

json
Copiar código
{
  "token": "seu-token-jwt"
}
Acesso a Recurso Protegido
http
Copiar código
GET /api/protected
Cabeçalho:

http
Copiar código
Authorization: Bearer seu-token-jwt
Endpoints
POST /api/register: Registra um novo usuário.
POST /api/login: Autentica um usuário e retorna um token JWT.
GET /api/protected: Acessa um recurso protegido (requer token JWT).
Tecnologias
Node.js
Express
JSON Web Token (JWT)
Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b minha-feature).
Commit suas mudanças (git commit -am 'Adiciona minha feature').
Envie para o branch (git push origin minha-feature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
