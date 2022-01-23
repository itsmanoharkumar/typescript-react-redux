import {Dispatch} from "react";
import axios from "axios";
import {ActionTypes} from "./types";

export interface Todo {
    id: number,
    title: string,
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[]
}

const url = 'https://jsonplaceholder.typicode.com/todo';

export const fetchTodos = () => {
    return async (dispatch: Dispatch<FetchTodosAction>) => {
        const response = await axios.get<Todo[]>(url);

        dispatch({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}