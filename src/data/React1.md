<!-- ---
title: Learning the Basics of React with ViteJS
author: Nemesis
date: 2024-04-26
--- -->

<!-- # Learning the Basics of React with ViteJS -->

Are you ready to dive into the world of React? Whether you're a beginner or looking to refresh your skills, React is a powerful library for building dynamic user interfaces. In this guide, we'll explore the fundamentals of React and how to set up a React project using ViteJS.

**Photo by:** [Antonio Batinić](https://www.pexels.com/photo/black-screen-with-code-4164418/)

## What is React?

React is a JavaScript library developed by Facebook for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently. React uses a declarative approach, making it easier to understand and maintain your code.

## Setting Up Your React Project with ViteJS

ViteJS is a modern build tool that offers fast and efficient development server and build times. Let's get started by setting up a new React project using ViteJS.

### Step 1: Install Vite

First, make sure you have Node.js installed on your machine. Then, you can create a new React project using Vite by running the following commands in your terminal:

```bash
npm init vite@latest my-react-app --template react
cd my-react-app
npm install
```

### Step 2: Create Your First React Component

Now that your project is set up, let's create your first React component. Create a new file named `App.js` in the `src` directory and add the following code:

```jsx
// src/App.js

import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to my first React app.</p>
    </div>
  );
}

export default App;
```

### Step 3: Render Your Component

Next, let's render the `App` component in the `index.js` file. Replace the contents of `src/index.js` with the following code:

```jsx
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Step 4: Start the Development Server

You're all set! To start the development server, run the following command in your terminal:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see your React app in action.

## Conclusion

Congratulations! You've just learned the basics of React and set up your first React project using ViteJS. Now you're ready to explore more advanced concepts and build powerful web applications with React.
\
Happy Coding!