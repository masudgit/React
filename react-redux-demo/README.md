============================Basic React Redux Patten============================
npx create-react-app react-redux-app
yarn add redux react-redux
rfce
yarn start

#Store:
To provide the redux store to a react application, the react-redux library export a component called Provider.
Q:  Where we provide the store?
Ans:Typically it is at the top of the App component. As we provide the store to every component in your application component tree.

#connect: 
    connect function connects react component to redux store.

    Q: How we can hold redux state and dispatch an action from within react component.?

    ~selectors: returns some state information from the redux store.
============================Basic React Redux Patten============================

####React Redux + Hooks:
React Redux pattern
Action creators, reducers, provide the store and connect the components.
Components can access state and dispatch actions.

React Hooks: 
 ->It give function components,the ability to use local component state and execute side effect and more.
 ->Subscribe to store and dispatch actions without connect()

a) useSelector Hook: 
act as mapStateToProps function.

b) useDispatch Hook:
dispatch an action.
This hook returns a reference to dispatch function from the redux store. 

====Logger Middleware=====
yarn add redux-logger

The middleware basically logs information related to the redux store. 
To view the logs, need to open the logs.

====Redux Devtool Extension====
google -> redux dev tools
          redux dev tools -> github link  

github link:
#1.3 Use redux-devtools-extension package from npm
npm install --save redux-devtools-extension
