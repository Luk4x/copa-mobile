<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>
<br>

# ⚽ Copa Project Mobile Interface

<br>
<p align="center">
  <a href="#-apresentação-em-vídeo-do-projeto">Vídeo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-telas">Telas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-demais-componentes">Componentes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando-o-projeto">Clone</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato-dos-contribuintes">Contato</a>
</p>
<br>

## 📹 Apresentação em Vídeo do Projeto
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/201728234-136afa4d-27c4-4060-b33a-0e0e6ac9d2bd.mp4" />
</div>

> **Caso o vídeo apresente algum erro, recarregue a página!**<br>

## 🚀 Tecnologias utilizadas

-   [Typescript](https://www.typescriptlang.org/)
-   [React Native](https://reactnative.dev/)
-   [NativeBase](https://nativebase.io/)
-   [Phosphor React Native](https://www.npmjs.com/package/phosphor-react-native)
-   [React Navigation](https://reactnavigation.org/)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-   [Country List](https://github.com/fannarsh/country-list)
-   [Axios](https://axios-http.com/docs/intro)
-   [Dayjs](https://day.js.org/)
-   [Expo](https://expo.dev/)
-   [Expo Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)
-   [Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)
-   [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/)
-   [React Native Safe Area Context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)
-   [React Native Screens](https://docs.expo.dev/versions/latest/sdk/screens/)
-   [React Native Svg](https://docs.expo.dev/versions/latest/sdk/svg/)
-   [React Native Svg Transformer](https://github.com/kristerkari/react-native-svg-transformer)
-   [React Native Country Flag](https://www.npmjs.com/package/react-native-country-flag)
-   [npm](https://www.npmjs.com/)

## 📝 Sobre

> Assistir o vídeo acima ajudará na compreensão da explicação!

Esse projeto é a Interface Mobile da **Copa**, uma aplicação temática da copa do mundo que realiza o cadastro e a gerência de bolões, jogos e usuários, desenvolvida durante a trilha Ignite da NLW Copa da [Rocketseat](https://www.rocketseat.com.br/).<br>
Os dados são fornecidos pela sua [API](https://github.com/Luk4x/copa-server) desenvolvida essencialmente com Fastify.<br>

### 📄 Telas

O projeto é composto por 5 componentes de tela, sendo eles:

  - **SignIn**: Além de ser a tela inicial, nela o usuário deve se cadastrar no App, e utilizo o sistema de autenticação do Google para tal.
  - **Pools**: Essa tela é responsável por listar todos os bolões que o usuário criou e/ou participa.
  - **New**: Essa tela é responsável pela criação de um bolão.
  - **Find**: Essa tela é responsável pela busca de um bolão por seu código. Caso o bolão seja encontrado, você se tornará participante dele automaticamente.
  - **Details**: Essa tela é responsável por mostrar os detalhes de um bolão: Quem o criou, quantos participam dele e quais jogos ele tem. Você também pode dar palpites nesses jogos e acessar seu Ranking.

### 📑 Demais Componentes

O projeto conta com mais 16 componentes que são reaproveitados pela aplicação, sendo eles:

- **Button**: Esse componente é relativo ao botão de destaque que se repete nas telas da aplicação. Ele tem o modo `PRIMARY` e `SECONDARY`.
- **ButtonIcon**: Esse componente é relativo a qualquer botão que seja apenas um ícone que se repete no **Header** da aplicação.
- **EmptyMyPoolList**, **EmptyPoolList**, **EmptyRankingList**: Esses componentes são relativos às suas respectivas listas, mostrados quando elas estão vazias.
- **Flag**, **Team**: Esses componentes são relativos aos ícones das bandeiras dos países na tela de **Details**.
- **Game**: Esse componente é relativo aos jogos na tela de **Details**.
- **Guesses**: Esse componente retorna a lista de jogos(**Games**) na tela de **Details**.
- **Header**: Esse componente é relativo ao cabeçalho que se repete nas telas da aplicação.
- **Input**: Esse componente é relativo aos Inputs que se repetem nas telas da aplicação.
- **Loading**: Esse componente é relativo ao efeito de carregamento, usado para aguardar requisições.
- **Option**: Esse componente é relativo às opções de lista na tela de **Details**.
- **Participants**: Esse componente é responsável por exibir os participantes de um bolão, utilizado no **PoolHeader**.
- **PoolHeader**: Esse componente é responsável por exibir os dados do bolão na tela de **Details**.
- **PoolCard**: Esse componente é responsável por exibir os dados do bolão resumidos e em um card, como utilizados na tela de **Pools**.

Destaco mais 3 componentes que desempenham um papel fundamental na aplicação:

- **AuthContext** e **useAuth**: São respectivamente, o contexto que guarda informações do usuário, e o hook criado para utilizá-lo de forma simplificada. Eles são responsáveis por deixar as informações do usuário acessíveis pela aplicação.
- **api**: Criado com o auxílio do axios, esse componente guarda a URL base da API que fornece os dados para o projeto.

## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/) e [Node.js v18.12.0](https://nodejs.org/en/) ou superior previamente instalados.<br>
Você também precisará da API do projeto rodando, portanto, antes de continuar por aqui, vá ao [Repositório da API](https://github.com/Luk4x/copa-server) e faça os passos sobre como cloná-la e executá-la primeiro!<br>
Feito esses dois passos, no terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/copa-mobile

# Entre no repositório com:
> cd copa-mobile

# Instale as dependências com:
> npm install

# Execute o projeto com:
> npx expo start

# Feito isso, você já poderá acessar o projeto pelo seu celular com QR Code que aparecerá no terminal! (ou por um link como: exp://192.168.0.112:19000)
```

## 🤝 Contato dos Contribuintes

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/lucasmacielf/">
        <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/><br>
        <sub>
          <b>Lucas Maciel</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<p align="right">
  <a href="#-copa-project-mobile-interface">Voltar ao Topo</a>
</p>
