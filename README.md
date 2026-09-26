# Eat & Split

Eat & Split is a responsive React app for tracking shared meals with friends. Add friends, record bills, and see each person’s balance from your perspective at a glance.

## Features

- Add a friend with a name and profile image URL.
- Select a friend to open the bill-splitting form.
- Enter the total bill and your share; the other share is calculated automatically.
- Choose whether you or your friend paid.
- View clear balance states: **You owe**, **Friend owes you**, or **You are even**.
- Update balances immediately after splitting a bill.
- Use the layout comfortably on desktop and smaller screens.

## Using the App

1. Open the app to see the starter friend list and current balances.
2. Select **Add friend**, enter a name and image URL, then submit the form.
3. Select a friend to open the bill form.
4. Enter the bill value and your expense. The friend’s expense is calculated from the remaining amount.
5. Choose who paid the bill and select **Split bill**.
6. The friend’s balance updates and the bill form closes.

Balances are tracked from your perspective. When you pay more than your share, the friend’s balance increases because they owe you. When your friend pays more, the balance decreases because you owe them.

## Getting Started

### Requirements

- Node.js 14 or later
- npm

### Install and Run

```bash
git clone https://github.com/AmrahovaDilber/Eat-And-Split.git
cd Eat-And-Split
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server reloads when source files change.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Starts the Create React App test runner. |
| `npm run build` | Creates an optimized production build in `build/`. |
| `npm run eject` | Copies the Create React App configuration into the project. This is irreversible. |

## Project Structure

```text
Eat-And-Split/
├── public/                 # Static files and app metadata
├── src/
│   ├── components/         # Shared or grouped UI components
│   ├── App.js              # App state and friend/bill workflows
│   ├── Button.js            # Reusable button component
│   ├── config.js            # Starter friend data
│   ├── FormAddFriend.js     # Add-friend form
│   ├── FormSplitBill.js     # Bill-splitting form
│   ├── Friend.js            # Friend row and balance display
│   ├── FriendsList.js       # Friend list rendering
│   ├── index.css            # Global application styles
│   └── index.js             # React entry point
├── package.json             # Dependencies and npm scripts
└── README.md                # Project documentation
```

## Tech Stack

- [React](https://react.dev/) 18
- [Create React App](https://create-react-app.dev/)
- JavaScript
- CSS

## Data and Limitations

- Friend data and balances are held in React state only; refreshing the page resets changes to the starter data.
- New profile images use the URL entered in the form, so the image must be publicly reachable by the browser.
- Bill inputs accept non-negative values, and your expense cannot be greater than the total bill.
