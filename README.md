# crypto-price-tracker
# Real-Time Crypto Price Tracker

## Overview

A responsive React application that tracks real-time cryptocurrency prices, simulating WebSocket updates and managing state with Redux Toolkit.

## Demo
![Screenshot 2025-04-24 233421](https://github.com/user-attachments/assets/18f345c6-a861-4077-8b9f-2edc047bdd10)



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

* **Integrate Real WebSocket:** Instead of using a mock, connect to a real-time cryptocurrency data feed (e.g., from Binance, Coinbase, or another exchange).
* **Filters:** Implement functionality to filter the displayed cryptocurrencies (e.g., show only top gainers, specific symbols).
* **Sorting:** Allow users to sort the table columns (e.g., by price, market cap, % change).
* **Local Storage Support:** Persist user preferences (e.g., sorting order, displayed columns) using `localStorage`.
* **Unit Tests:** Write unit tests for Redux reducers and selectors to ensure the state management logic is working correctly.
* **TypeScript:** Migrate the codebase from JavaScript to TypeScript for improved type safety and developer experience.
* **More Detailed Charts:** Implement more interactive and detailed charting using a library like Chart.js or Recharts.
* **User Interface Enhancements:** Improve the visual design and user experi

## Author

DISHA MISHRA / https://github.com/Disha1802
