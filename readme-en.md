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

The project has 16 more components that are reused by the application, which are:

- **Button**: This component is related to the highlight button that is repeated in the application screens. It has `PRIMARY` and `SECONDARY` mode.
- **ButtonIcon**: This component is relative to any button that is just an icon that is repeated in the **Header** of the application.
- **EmptyMyPoolList**, **EmptyPoolList**, **EmptyRankingList**: These components are relative to their respective lists, shown when they are empty.
- **Flag**, **Team**: These components are related to the country flag icons in the **Details** screen.
- **Game**: This component is related to the games in the **Details** screen.
- **Guesses**: This component returns the list of games(**Games**) on the **Details** screen.
- **Header**: This component is relative to the header that is repeated in the application screens.
- **Input**: This component is related to the Inputs that are repeated in the application screens.
- **Loading**: This component is related to the loading effect, used to wait for requests.
- **Option**: This component is relative to the list options in the **Details** screen.
- **Participants**: This component is responsible for displaying the participants of a pool, used in the **PoolHeader**.
- **PoolHeader**: This component is responsible for displaying the pool data on the **Details** screen.
- **PoolCard**: This component is responsible for displaying the pool data summarized and on a card, as used in the **Pools** screen.

I highlight 3 more components that play a fundamental role in the application:

- **AuthContext** and **useAuth**: They are, respectively, the context that stores user information, and the hook created to use it in a simplified way. They are responsible for making user information accessible by the application.
- **api**: Created with the help of axios, this component stores the base URL of the API that provides the data for the project.

## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/) and [Node.js v18.12.0](https://nodejs.org/en/) or higher previously installed.<br>
You'll also need the project's API running, so before continuing here, go to [API Repository](https://github.com/Luk4x/copa-server) and go through the steps on how to clone and run it first!<br>
After these two steps, in the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/copa-mobile

# Enter the repository with:
> cd copa-mobile

# Install dependencies with:
> npm install

# Run the project with:
> npx expo start

# Once this is done, you can now access the project on your mobile phone with a QR Code that will appear on the terminal! (or by a link like: exp://192.168.0.112:19000)
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
  <a href="#-copa-project-mobile-interface">Back to Top</a>
</p>
