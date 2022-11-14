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
  <a href="#-páginas">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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

> Assistir o vídeo acima e/ou acessar o projeto online ajudará na compreensão da explicação!

Esse projeto é a Interface Mobile-First do **CodeBurger**, uma aplicação Web que realiza o cadastro e a gerência de pedidos de uma hamburgueria. Os pedidos ficam armazenados em sua [API](https://github.com/Luk4x/dev-burger-order-log-API) que desenvolvi essencialmente com ExpressJS.

### 📄 Páginas

O projeto é composto por 2 componentes de páginas, sendo eles:

  - **Home**: Além de ser a página inicial do CodeBurger, ela responsável por realizar o cadastro dos pedidos validados pelas verificações na API.
  - **Orders**: Essa página é responsável por listar os pedidos já cadastrados na API, e também informa seus respectivos status (com um tempo de preparação aleatório entre `5` à `40` segundos) e preço (gerado a partir da quantidade de caracteres do pedido + um valor aleatório entre `1` à `50`).

### 📑 Demais Componentes

Fora os componentes de Rotas (**Routes**), estilos globais (**GlobalStyles**) e Root (**main**), o projeto conta com mais 5 componentes que são reaproveitados em ambas as páginas, sendo eles:

- **Socials**: Esse componente é relativo ao botão que lista minhas redes sociais.
- **MainContainer**: Esse componente é relativo ao container que abriga as informações dos pedidos.
- **Image**: Esse componente é relativo às imagens de _Logo_ e _Embalagem_ do CodeBurger.
- **Button**: Esse componente é relativo aos botões de _Pedir_ e _Voltar_.
- **Title**: Esse componente é relativo aos títulos do **MainContainer**.

## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) ou superior e [Yarn](https://yarnpkg.com/) previamente instalados.<br>
Você também precisará da API do projeto rodando, portanto, antes de continuar por aqui, vá ao [Repositório da API](https://github.com/Luk4x/dev-burger-order-log-API) e faça os passos sobre como cloná-la e executá-la primeiro!<br>
Feito esses dois passos, no terminal:


```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/dev-burger-order-log-interface.git

# Entre no repositório com:
> cd dev-burger-order-log-interface

# Instale as dependências com:
> yarn install

# Execute o projeto com:
> yarn dev

# Feito isso, você já poderá acessar o projeto pelo link que aparecerá no terminal! (algo como http://localhost:3000/ ou http://127.0.0.1:5173/)
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
  <a href="#-codeburger-project-interface">Voltar ao Topo</a>
</p>
