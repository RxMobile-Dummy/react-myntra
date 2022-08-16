# React-myntra-ecommerce
- We have made this Application/website to purchase products.
- We can buy product online through our website or Mobile Application

# React Clean Architecture
Applying clean architecture to a react codebase brings lots of benefits, most of them you can find by simply googling what's clean architecture and what should we adopt architectural patterns.
One advantage that strikes me is having business rules isolated from framework-specific things. This means that our core logic is not coupled to React, React Native, Express, etc...  
This gives you enough flexibility to, for example, move specific parts of the application to a backend, change libraries without too much pain, test once and reuse as many times as you want, share code between React and React Native applications, among others.
![high-level-diagram](https://github.com/RxMobile-Dummy/react-myntra/blob/architecture_setup/docs/images/high-level-diagram.jpg)  
This is a realistic approach, what I mean by that is: It's simple enough to be applicable and Robust enough to have it in a production environment.
Although I have greatly simplified it, for educational purposes, I believe that this example is of great value to get you started with applying architectural patterns and adapting them to your own needs.    

## Communication flow
![communication-flow-diagram](https://github.com/RxMobile-Dummy/react-myntra/blob/architecture_setup/docs/images/communication-flow.jpg)  

### A brief explanation of each responsibility
- **Entity**: Application independent business rules
- **Interactor**: Application-specific business rules
- **Adapter**: Glue code from/to *Interactors* and *Presenter*, most of the time implementing a framework-specific behaviour.
  e. g.: We have to connect *Interactor* with react container, to do so, we have to connect *Interactor* with redux (framework) and then connect redux to container components.
- **Presenter**: Maps data from/to *Adapter* to/from *Components*.
- **Components**: Simplest possible unit of presentation. Any mapping, conversion, MUST be done by the *Presenter*.
---  

## Folder Structure
This repository contains 2 examples of how to implement react following clean architecture, represented by the [diagram](#philosophy) above, and both follow the same folder structure:
```
./counter
├── core
│   └── lib
│       ├── adapters
│       │   └── redux
│       ├── entities
│       ├── frameworks
│       └── useCases
├── native
│   └── src
│       ├── components
│       └── stylesheets
└── web
    └── src
        ├── assets
        ├── components
        └── stylesheets
```
*Note:* the `frameworks` folder comprises framework-specific setups to have it available to the adapters.  

## Running the apps
run `npm install` under the project you'd like to run, and then run `npm start`.