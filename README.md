# Eat & Split

Eat & Split is a simple React app for keeping track of shared meals with friends. Add the people you regularly eat with, select a friend, and record who paid for the bill. The app automatically keeps each friend’s balance up to date so you always know who owes whom.

## Features

- Add friends with a name and profile image URL.
- Select a friend to open a bill-splitting form.
- Enter the total bill and each person’s share.
- Choose whether you or your friend paid the bill.
- See balances at a glance:
  - **You owe** a friend when your balance is negative.
  - **A friend owes you** when their balance is positive.
  - **You are even** when the balance is zero.
- Close the selected friend or the add-friend form when it is no longer needed.

## How It Works

1. Start the app and review your friend list.
2. Select **Add friend** to add someone new.
3. Choose a friend and enter the total bill.
4. Enter your share of the bill. The friend’s share is calculated automatically.
5. Select who paid the bill and submit the form with **Split bill**.
6. The friend’s balance is updated immediately.

Balances are tracked from your perspective. For example, if you pay the full bill, your friend’s balance increases because they owe you their share. If your friend pays, your balance decreases because you owe them.

## Tech Stack

- [React](https://react.dev/) 18
- [Create React App](https://create-react-app.dev/)
- JavaScript
- CSS

## Getting Started

### Prerequisites

- Node.js 14 or later
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/AmrahovaDilber/Eat-And-Split.git
cd Eat-And-Split
npm install
```

### Run Locally

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically when you edit the source files.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Starts the test runner in watch mode. |
| `npm run build` | Creates an optimized production build in `build/`. |
| `npm run eject` | Ejects the Create React App configuration. This is irreversible. |

## Project Structure

```text
Eat-And-Split/
├── public/             # Static files and app metadata
├── src/
│   ├── App.js          # Friends, selection, and bill-splitting logic
│   ├── index.css       # Application styles
│   └── index.js        # React entry point
├── package.json        # Dependencies and npm scripts
└── README.md           # Project documentation
```

## Notes

Friend data is currently held in React state, so balances reset when the page is refreshed. Profile images use image URLs supplied when a friend is added.
