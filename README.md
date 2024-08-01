API Node.js com JWT
Este projeto é uma API desenvolvida em Node.js que utiliza JWT (JSON Web Tokens) para autenticação.

Instalação
Clone o repositório: Faça o download do código-fonte do projeto do repositório GitHub.

Navegue até o diretório do projeto: Abra o terminal e mude para o diretório onde o código-fonte foi clonado.

Instale as dependências: Execute o gerenciador de pacotes Node para instalar todas as dependências necessárias listadas no arquivo package.json.

Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como a porta do servidor e a chave secreta para JWT.

Inicie o servidor: Use o comando apropriado para iniciar o servidor Node.js. O servidor estará em execução e ouvindo na porta configurada.

Endpoints
Registro de Usuário
Método: POST
Rota: /api/register
Descrição: Endpoint para registrar um novo usuário.
Corpo da Requisição:
username: Nome de usuário
password: Senha

Login
Método: POST
Rota: /api/login
Descrição: Endpoint para autenticar um usuário e retornar um token JWT.
Corpo da Requisição:
username: Nome de usuário
password: Senha
Resposta:
token: Token JWT gerado

Acesso a Recurso Protegido
Método: GET
Rota: /api/protected
Descrição: Endpoint para acessar um recurso protegido que requer autenticação.
Cabeçalho:
Authorization: Bearer token JWT
