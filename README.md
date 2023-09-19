
# My Temp Email

>This is a challenge by [Coodesh](https://coodesh.com)

Trata-se de uma aplicação que gera emails temporários e descartáveis que duram apenas 10 minutos.
## Tecnologias

- **[NodeJS](https://nodejs.org/pt-br)**
- **[Angular](https://angular.io/)**
- **[NGINX](https://docs.nginx.com/)**
- **[Docker](https://www.docker.com/)**
- **[TailwindCSS](https://tailwindcss.com/)**
- **[Material Angular](https://material.angular.io/)**
- **[Qraphql-request](https://www.npmjs.com/package/graphql-request)**
- **[Cors-anywhere](https://github.com/Rob--W/cors-anywhere)**


## Iniciando localmente

Clone o projeto

```bash
  git clone https://github.com/jeffersonAraujo2012/my-temp-email.git
```

Va para a pasta raiz do projeto

```bash
  cd my-temp-email
```

Instale as dependências

```bash
  npm install
```

Inicie a aplicação

```bash
  npm start
```

## Interface da aplicação

Quando o sistema ficar online em seu ambiente local, você poderá acessa-lo em seu navegador de preferência em **localhost:4200**.

### Área de geração de email
Na parte superior verá a área onde o seu endereço de email é gerado. Um é gerado automaticamente assim que você entra no sistema. Você fechar e sair do navegador que esse endereço não será perdido a menos que seu tempo de validade acabe ou você clique no botão **refresh**.

**ATENÇÃO:** O botão **refresh NÃO**  serve para atualizar sua caixa de entrada. Ele serve para gerar um novo endereço de email. Ao clicar nele um novo endereço será gerado e todos os emails do endereço anterior irão desaparecer de sua tela.

### Caixa de entrada
Na parte esquerda da aplicação está sua caixa de entrada. Ela atualiza automaticamente. Os card apresentam:

- Título do email.
- Endereço de origem.
- Texto inicial do email.

### Área do email
Ao clicar em um email da caixa de entrada ele será exibido na sua área a direita, que inicialmente está em branco.

