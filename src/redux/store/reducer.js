// src/redux/reducer.js

// Importējam darbību tipus no action foldera
import { ADD_TODO, DELETE_TODO } from "../action/index.js";

const initialState = {
  todos: [],
};

// Pagaidu ID ģenerators (reālā lietotnē labāk izmantot bibliotēku, piemēram, uuid)
let nextTodoId = 0; 

// Reducer funkcija
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId++,
            title: action.payload, // payload ir todo teksts
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        // Atgriežam jaunu masīvu bez izdzēstā elementa
        todos: state.todos.filter(todo => todo.id !== action.payload), 
      };
    default:
      // Ja darbība neatbilst, atgriežam pašreizējo stāvokli
      return state; 
  }
}

export default todoReducer;
