# Agileengine Fullstack
This is a test for a Fullstack position at AgileEngine.

## Requirements
- Node
- Node package manager

## Technologies
The technologies used are:

## Root
- Node
- Concurrently

### Backend:
- Node
- Express
- Express validator
- async-mutex
- uuid

### Frontend
- Node
- React
- SCSS
- Bootstrap
- Context API
- Axios
- Jest
- React testing library

## Choices
### Root
- Added `concurrently` to handle single-command petition, running both `backend` and `frontend`.

### Backend
- Used `express-validator` library to create middlewares to check on body's request. On post, check if `type` is "credit" or "debit" and `amount` higher than 0 (min 1). These was not requested by the excersise but very important for the application case of use.
- Used `async-mutex` library to create lock with timeout included (to avoid deadlock) on post request.
    As this test is a centralized storage and due to the single-command run petition on the assignment this was my choice, but in real case of use if the storage was distributed we could install and use Redis to create a lock system.
- Used `uuid` to create id for a single transaction.

### Frontend
- Even though it was not really necessary due to the simplicity of the test, I used `Context API` to handle my state.
- Used axios to create a client.
- Used React.Memo to memorize get response from API.
- To handle styles, used SCSS as CSS pre-processor with modified 7 - 1 BEM. Custom mixins for fonts and colors added, use of rem function with 16px as 1em.
- Used bootstrap framework for quick markup styles.
- Added small tests for accordion render and click button. To run it, go to `frontend` folder and run `npm run test` command.

## Installation
- Located on root folder, for dev run `npm start`. For build run `npm run build` commands on the terminal. Both processes might take a while to finish.
