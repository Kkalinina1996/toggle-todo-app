// redux/action/index.js

// Definē darbību tipu konstantes
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Darbību veidotājs (Action creator) priekš pievienošanas
export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: title,
});

// Darbību veidotājs (Action creator) priekš dzēšanas
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
