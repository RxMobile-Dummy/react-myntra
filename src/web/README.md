# react-myntra

An e-commerce website

## Features

- Home screen
  - We have Added the home default screen which will show the products list like - DEALS OF THE DAY, BEST OF MYNTRA EXCLUSIVE BRANDS, TOP PICKS.
- Category product screen
  - We have Added the screen which will open on menu item click and show ths list acroding the menu selected.
- Login screen
  - We have Added to login in to your account, need to login to purchase the product.
- Register screen
  - We have Added to register the account using the unique email and mobile number.
- Wishlist screen
  - We have Added to add the item in wishlist, for that need to login first.
- Account screen
  - We have Added Account feature where you can add or edit your addresses, You can add your card to checkout fast, you can edit your account details.
- Bag screen
  - We have Added Bag screen, where we can checkout our product which we have added to bag from wishlist or product details.
- Product details screen
  - We have Added Product details screen, Where we will see the full product description and can add to bag from here.

# Folder Structure

```
./react-myntra
├── public
│    ├── index.html
│    ├── manifest.json
│
├── src
│    ├── assets
│    ├── fonts
│    ├── images
│    ├── components
│    ├── stylesheets
│    ├── pages
│          |── home
│          |── categoryproduct
│          |── login
│          |── register
│          |── wishlist
│          |── account
│          |── bag
│    ├── redux
│    ├── App.js
│    ├── index.js

```

# Tech components

- **React**
  - React.js is one of the most popular front-end JavaScript and TypeScript libraries for building Web applications. It is actively maintained by Meta and a community of skilled developers and companies.

- **TypeScript**
  - TypeScript Code is converted into Plain JavaScript Code: TypeScript code can’t be natively interpreted by browsers. So if the code was written in TypeScript, it gets compiled and converted into JavaScript. This process is known as Trans-piled. With the help of JavaScript code, browsers are able to read the code and display it.
  - JavaScript is TypeScript: Whatever code is written in JavaScript can be converted to TypeScript by changing the extension from .js to .ts.
  - Use TypeScript anywhere: TypeScript can be compiled to run on any browser, device, or operating system. TypeScript is not specific to any single environment.
  - TypeScript supports JS libraries: With TypeScript, developers can use already existing JavaScript code, incorporate popular JavaScript libraries, or call the TS Code from native JavaScript code.

  - **Redux**
     <p align="center">
    <img width="300" height="300" src="redux_rn.png">
  </p>

  - Increases the Predictability of a State. In the Redux library, a state is invariably predictable.
  - It is Highly Maintainable.
  - It Prevents Re-renders.
  - Redux Optimizes Performance.
  - Makes Debugging Easier.
  - Useful in Server-Side Rendering.
  - Provides Ease of Testing.

- **LifeCycle Component**
  - Hooks
  - Functional Components

- **Unit Testing**
  - Junit Framework
  - Offers a CLI tool to control your tests easily
  - Comes with an interactive mode that automatically runs all affected tests for the code changes you’ve made in your last commit
  - Provides syntax to test a single test or skip tests with .only and .skip. This feature is useful when debugging individual
    tests

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

