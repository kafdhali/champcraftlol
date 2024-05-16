# ChampCraft

A brief description of what this project does and who it's for.

**ChampCraft** is a web application that allows users to view, add, update, and delete League of Legends champions. This project is built using React, Chakra UI for styling, and Axios for making HTTP requests. Additionally, react-toastify is used for toast notifications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with ChampCraft, follow these steps:

Clone the repository:

git clone https://github.com/kafdhali/champcraftlol.git

## Usage

- **View Champions**: The home page displays a list of League of Legends champions.
- **Add Champion**: Use the "Add Champion" button to add a new champion to the list.
- **Update Champion**: Each champion card has input fields to update the lane and price.
- **Delete Champion**: Use the "Delete" button on a champion card to delete the champion. A confirmation toast will appear before deletion.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library.
- **Axios**: Promise-based HTTP client for making requests to the backend API.
- **React Router**: Declarative routing for React applications.
- **React Toastify**: Provides easy-to-use toast notifications for React apps.

## Components

### ChampionList.jsx

This component fetches the list of champions from the backend, displays them, and allows for adding, updating, and deleting champions.

**Key Functions**:

- `HandleDelete(id)`: Deletes a champion after user confirmation via a toast notification.
- `HandleUpdate(id)`: Updates the champion's details.

### AddChampion.jsx

A form component to add a new champion.

### ToggleAddChampion.jsx

A button component that toggles the visibility of the AddChampion component.

### Footer.jsx

A footer component with social media links.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.
