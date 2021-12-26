# Chat App Prototype

This is a simple chat app prototype built with NextJs and Socket.io deployed to Heroku.

## Features

- Create and save user
- Realtime updates using web socket
- Create, add and join multiple channels
- Message auto-scroll to the newest messages
- Message thread with an update of the replays count

## Technologies Used

- NextJS - to quickly spin up a new project and handle routing for the app
- Socket.io - web socket connection for real time updates
- styled-components - to style component using CSS-IN-JSS
- Express - custom dev server for NextJs with Express. The web socket connection requires a DEV server so the connection can stay open

## Possible Improvements

- Better design and mobile design
- Better error and loading state handling
- Optimistic updates
- Reach text editor
- Use real database
- Save user to database
- Add translations
