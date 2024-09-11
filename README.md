# easy-react-login

## Easy React login component for React applications.

The `Login` component is a React functional component used for handling user login. It provides a form with input fields for username and password, and includes error handling and custom validation.

## ✨ Features

- **Easy Integration:** Use the `Login` component without writing any additional code.
- **Field Validation:** Automatically validates that the username and password fields are required.
- **Customizable Button:** Set the label of the login button using the `buttonLabel` prop.
- **API Integration:** Retrieve the username and password via the `onLogin` prop handler to connect with your API.
- **Styling Options:** Customize the component's style using the `className` prop for additional styling.
 

## 📦 Install

```bash
npm install easy-react-login
```

```bash
yarn easy-react-login
```


🔨 Usage
```tsx
import React, { useState } from "react";
import { Login } from "easy-react-login";

const Display = ({ username, onLogout }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

const LoginWrapper = () => {
  const [username, setUsername] = useState(null);

  const handleLogin = (credentials) => {
    setUsername(credentials.username);
  };

  const handleLogout = () => {
    setUsername(null);
  };

  return (
    <div>
      {!username ? (
        <>
          <Login onLogin={handleLogin} buttonLabel="Sign In" />
        </>
      ) : (
        <Display username={username} onLogout={handleLogout} />
      )}
    </div>
  );
};

export LoginWrapper;
```

## Folder Structure
```javascript

├── public
|     └── index.html
├── src
    ├── components
    |     ├── Button
    |     |     ├── Button.tsx
    |     |     └── button.css
    |     |     └── index.tsx
    |	  ├── Display
    |     |     ├── Display.tsx
    |     |     └── Display.css
    |     |     └── index.tsx
    |     ├── Input
    |     |     ├── Input.tsx
    |     |     └── Input.css
    |     |     └── index.tsx
    |     ├── Login
    |     |     ├── Login.tsx
    |     |     └── Login.css
    |     |     └── index.tsx
    |     ├── LoginWrapper
    |     |     ├── LoginWrapper.tsx
    |     |     └── index.tsx
    |     └── index.ts
    ├── .env
    ├── index.ts
|
├── .gitignore
├── package-lock.json
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```


## ⌨️ Development

```bash
$ git clone https://github.com/maamunrcd/react-login-component.git
$ cd react-login-component
$ npm install
```

## Available Scripts

### To build the package using Rollup
```bash
$ npm run build
```

### Versioning
--To update the version of the package (patch version by default), run:
```bash
$ npm run release

This will:
Automatically bump the patch version (e.g., from 0.0.7 to 0.0.8).
Build the package.
```

### Publishing
--To publish the latest version of your package to npm, follow these steps:

```bash
$ npm login
After a successful login, publish the package by running:
```  

```bash
$ npm publish
``` 

Author
```
Md. Mamun Or Rashid

