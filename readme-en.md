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
  <a href="#-project-video-presentation">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies-used">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-screens">Screens</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-other-components">Components</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning-the-project">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributor-contact">Contact</a>
</p>
<br>

## 📹 Project Video Presentation
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/201728234-136afa4d-27c4-4060-b33a-0e0e6ac9d2bd.mp4" />
</div>

> **If the video has any errors, reload the page!**<br>

## 🚀 Technologies used

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

## 📝 About

> Watching the video above will help you understand the explanation!
  
This project is the **Copa** Mobile Interface, a world cup themed application that performs the registration and management of pools, games and users, developed during the Ignite track of the NLW Cup of [Rocketseat](https:/ /www.rocketseat.com.br/).<br>
The data is provided by its [API](https://github.com/Luk4x/copa-server) developed essentially with Fastify.<br>

### 📄 Screens

The project consists of 5 screen components, which are:

- **SignIn**: In addition to being the home screen, the user must register on the App, and I use Google's authentication system to do so.
- **Pools**: This screen is responsible for listing all pools that the user created and/or participates in.
- **New**: This screen is responsible for creating a pool.
- **Find**: This screen is responsible for searching for a pool by its code. If the pool is found, you will automatically become a participant.
- **Details**: This screen is responsible for showing the details of a pool: who created it, how many participate in it and what games it has. You can also make predictions on these games and access their Ranking.

### 📑 Other Components

Apart from the **Routes**, **GlobalStyles** and **main** components, the project has 5 more components that are reused on both pages, which are:

- **Socials**: This component is relative to the button that lists my social networks.
- **MainContainer**: This component is related to the container that houses the order information.
- **Image**: This component is relative to the CodeBurger _Logo_ and _Packaging_ images.
- **Button**: This component is relative to the _Pedir_ and _Voltar_ buttons.
- **Title**: This component is related to the titles of the **MainContainer**.

## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) or higher and [Yarn](https://yarnpkg.com/) previously installed.<br>
You'll also need the project's API running, so before continuing here, go to [API Repository](https://github.com/Luk4x/dev-burger-order-log-API) and go through the steps on how to clone and run it first!<br>
After these two steps, in the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/dev-burger-order-log-interface.git

# Enter the repository with:
> cd dev-burger-order-log-interface

# Install dependencies with:
> yarn install

# Run the project with:
> yarn dev

# Once this is done, you will be able to access the project through the link that will appear in the terminal! (something like http://localhost:3000/ or http://127.0.0.1:5173/)
```

## 🤝 Contributor Contact

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
  <a href="#-codeburger-project-interface">Back to Top</a>
</p>
