# RocketNotes FrontEnd
RocketNotes é uma aplicação feita no curso explorer da Rocketseat, o usuário pode:

- Criar sua conta
- Alterar seus dados
- Colocar uma foto de perfil 
- Criar uma nota
- Filtra notas pela tag
- Filtras notas pela barra de pesquisa


[Rocketseat](https://www.rocketseat.com.br)

## Preview

![image](https://github.com/gabrielbarros23/Food-Explorer-FrontEnd/assets/91755263/16d57e60-52a7-4124-9478-c1efc105e776)

![image](https://github.com/gabrielbarros23/Food-Explorer-FrontEnd/assets/91755263/5d5b2a69-3987-4fbb-89cf-c60462d8a6ac)

![image](https://github.com/gabrielbarros23/Food-Explorer-FrontEnd/assets/91755263/3cbd69b2-99ad-4ee5-8923-9f0d9eb5de51)

![image](https://github.com/gabrielbarros23/Food-Explorer-FrontEnd/assets/91755263/d53bbaf7-db2e-49a7-9681-5f7f4d0a89b3)
## Deploy

Clone o projeto

```bash
  git clone git@github.com:gabrielbarros23/RocketNotes-FrontEnd.git
```

Entre no diretório do projeto

```bash
  cd RocketNotes-FrontEnd
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```
## BackEnd

Para conectar o backend com o frontend localmente juntos voce irá precisar dar deploy no BackEnd seguindo as instruções do deploy no repositório abaixo

[BackEnd](https://github.com/gabrielbarros23/RocketNotes-API)

E após isso voce irá no frontend em src/services/api.js e troque o "https://rocketnotes-api-0ziw.onrender.com" para "http://localhost:" e a porta que esta aparecendo no terminal do backend
## Stacks

- [axios]( https://github.com/axios/axios)
- [react]( https://react.dev)
- [react-router-dom]( https://reactrouter.com/web/guides/quick-start)
- [react-dom](https://reactjs.org/docs/react-dom.html)
- [react-icons:](https://react-icons.github.io/react-icons/)
- [styled-components]( https://styled-components.com/docs)
- [vite]( https://vitejs.dev/guide/)

BackEnd foi hospedado no Render e o FrontEnd no Netlify

- [Render](https://render.com/)
- [Netlify](https://www.netlify.com/)


## Resultado

**OBS: Por ser uma host gratuita, o BackEnd hiberna após ficar inativo. Ao usar a aplicação, ela dará início normalmente em 1 minuto.**

[Resultado Final](https://rocketnotes23.netlify.app/)