## Descrição da Aplicação

Desenvolvemos uma API RESTful que não apenas fornece acesso à lista de indicados e vencedores da categoria "Pior Filme" dos Golden Raspberry Awards, mas também oferece recursos adicionais. Além de fornecer informações sobre os filmes premiados, nossa API permite o cadastro de usuários e realiza a autenticação de maneira segura. Isso significa que os usuários podem criar contas personalizadas para acessar os dados da API, garantindo uma experiência personalizada e segura. Com uma abordagem focada na usabilidade e na segurança dos dados, nossa API é uma solução abrangente para os desenvolvedores que desejam integrar facilmente informações sobre os "piores filmes" aos seus aplicativos, enquanto garantem a proteção das informações dos usuários.

### Funcionalidades Principais:

1. **Autenticação de Usuários**: A aplicação utiliza JSON Web Tokens (JWT) para autenticar os usuários durante a interação com a plataforma. Ao fazer login, cada usuário recebe um token JWT exclusivo, que é usado para acessar os recursos protegidos da aplicação.

2. **Gerenciamento de Usuários**: A aplicação oferece recursos completos de gerenciamento de usuários, incluindo registro, login, recuperação de senha e atualização de informações de perfil. Todos esses recursos são protegidos por autenticação JWT para garantir a segurança dos dados do usuário.

3. **Persistência de Mensagens Arquivo CSV**: O processo de importação de dados de arquivos CSV para um banco de dados através de uma API RESTful envolve etapas como recebimento do arquivo, validação, processamento, mapeamento de dados, inserção no banco de dados, tratamento de erros e transações, resposta ao cliente, e considerações de segurança e desempenho. Cada etapa é crucial para garantir uma importação bem-sucedida e confiável dos dados, além de proporcionar uma experiência segura e eficiente para os usuários da API.

4. **Renovação de Tokens JWT**: A API suporta a renovação automática de tokens JWT para usuários autenticados, proporcionando uma experiência contínua sem a necessidade de fazer login repetidamente. Isso melhora a conveniência e a usabilidade da aplicação para os usuários.

5. **Middleware de Verificação de Rotas Autenticadas**: A aplicação utiliza middlewares para verificar se as rotas estão autenticadas. Esses middlewares garantem que apenas usuários autenticados tenham acesso a determinadas rotas e recursos protegidos da aplicação.

### Tecnologias Utilizadas:

- **Node.js e Express.js**: A aplicação é desenvolvida utilizando Node.js e o framework Express.js para a criação de APIs RESTful robustas e escaláveis.

- **Socket.IO**: A comunicação em tempo real é habilitada pelo Socket.IO, uma biblioteca JavaScript que facilita a implementação de comunicação bidirecional entre clientes e servidores por meio de websockets.

- **JSON Web Tokens (JWT)**: JWT é utilizado para autenticar os usuários e garantir a segurança das comunicações entre cliente e servidor.

- **Banco de Dados Relacional (e.g., PostgreSQL)**: Os dados dos usuários e as mensagens trocadas são armazenados de forma segura em um banco de dados relacional, como o PostgreSQL.

- **Jest para Teste de Funcionalidades**: O framework de teste Jest é utilizado para testar as funcionalidades da aplicação, garantindo a qualidade e confiabilidade do código implementado.

Essa descrição atualizada agora inclui informações sobre os middlewares de verificação de rotas autenticadas, destacando a importância da autenticação para garantir a segurança e a integridade dos dados da aplicação.

### Passo 1: Instalação das Dependências

1. Certifique-se de ter o Node.js e o Yarn instalados em seu sistema. Você pode baixá-los e instalá-los em [nodejs.org](https://nodejs.org/) e [yarnpkg.com](https://yarnpkg.com/) respectivamente.
2. Clone o repositório do projeto Badaró em sua máquina local usando o comando `git clone https://github.com/seu-usuario/badaro-teste.git`.
3. Navegue até o diretório do projeto usando o terminal ou prompt de comando.

### Passo 4: Inicialização do Servidor

1. Após a migração do banco de dados ser concluída com sucesso, você pode iniciar o servidor da aplicação Badaró.
2. Execute o comando `yarn dev` para iniciar o servidor. Isso iniciará o servidor em modo de desenvolvimento.
