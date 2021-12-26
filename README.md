# Chat App Prototype

This is a simple chat app prototype built with NextJs and Socket.io deployed to Heroku. The design of the app is heavily inspired by [Slack](https://slack.com/).

## Demo

The app can be tested here - https://vydimitrov-chat-app.herokuapp.com

## Features

- Create and save user to local storage
- Realtime updates using web socket
- Create, add and join multiple channels
- Message auto-scroll to the newest message
- Message thread with an update of the replies count

## Technologies

- NextJS - to quickly spin up the new project and handle routing for the app
- Socket.io - web socket connection for realtime updates
- styled-components - to style components using CSS-in-JS
- Express - custom DEV server for NextJs with Express. The web socket connection requires a DEV server so the connection can stay open.

## Local Development

- Clone the repo
- Install dependencies
- run `yarn dev` and navigate to `localhost:3000`

## Possible Improvements

- Add unit tests and end-to-end tests
- Better design and mobile design
- Better error and loading state handling
- Optimistic updates
- Reach text editor
- Use real database
- Save user to database
- Add translations
