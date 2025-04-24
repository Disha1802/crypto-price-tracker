# crypto-price-tracker
# Real-Time Crypto Price Tracker

## Overview

A responsive React application that tracks real-time cryptocurrency prices, simulating WebSocket updates and managing state with Redux Toolkit.

## Demo

*(Embed a GIF or link to a video demo here. You'll need to create this separately and either upload the GIF to GitHub or host the video on a platform like YouTube or Loom.)*

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)<your-github-username>/<your-repository-name>.git
    cd <your-repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the application:**
    ```bash
    npm start
    # or
    yarn start
    ```

4.  Open your browser and navigate to `http://localhost:3000`.

## Tech Stack

* **Frontend:**
    * [React](https://react.dev/)
    * [Redux Toolkit](https://redux-toolkit.js.org/) for state management
    * [Styled Components](https://styled-components.com/) for styling
    * [@faker-js/faker](https://fakerjs.dev/) for generating mock data
    * [react-sparklines](https://github.com/borisyankov/react-sparklines) for the 7D chart
* **Other:**
    * [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for package management
    * [Git](https://git-scm.com/) for version control

## Architecture

The application follows a standard React structure with Redux for state management:

* **`src/app/store.js`:** Configures the Redux store.
* **`src/features/crypto/cryptoSlice.js`:** Defines the Redux slice for managing cryptocurrency data, including actions and reducers.
* **`src/components/CryptoTable.js`:** The main React component responsible for rendering the cryptocurrency table and subscribing to Redux state.
* **`src/services/mockWebSocket.js`:** Simulates real-time WebSocket updates using `setInterval` and dispatches Redux actions.
* **`src/utils/mockData.js`:** Generates the initial mock cryptocurrency data.
* **Redux State:** The global state managed by Redux includes an array of cryptocurrency assets with their details (price, changes, market cap, volume, historical data).
* **Data Flow:**
    1.  The `CryptoTable` component connects to the Redux store using `useSelector`.
    2.  The `mockWebSocket` service periodically generates random updates.
    3.  These updates are dispatched as actions (`updateCryptoData`) to the Redux store.
    4.  The `cryptoSlice` reducer updates the state in response to these actions.
    5.  The `CryptoTable` component re-renders automatically when the relevant state changes, reflecting the "real-time" updates.

## Bonus Features (If Implemented)

*(List any bonus features you implemented here, e.g., real WebSocket integration, filters, sorting, local storage, unit tests, TypeScript.)*

## Author

Your Name / GitHub Username
