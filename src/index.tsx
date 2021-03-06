import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {App} from "./components/App";
import {reducers} from "./reducers/intex";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App color="red"/>
    </Provider>,
    document.querySelector('#root')
)