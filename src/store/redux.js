import { createSlice, configureStore } from "@reduxjs/toolkit";
/**
 * createSlice est une fonction qui permet de créer un slice.
 * Un slice est un morceau de state dans Redux.
 */
const todoSlice = createSlice({
	/**
	 * Le nom de mon slice, il doit être unique.
	 * Il sera utilisé pour accéder à mon state dans le store.
	 */
	name: "todos",
	/**
	 * initialState est mon état initial, c'est-à-dire la valeur de mon state au démarrage de l'application.
	 */
	initialState: [
		{
			id: 1,
			text: "Faire les courses",
			completed: false,
		},
	],
	/**
	 * reducers est un objet qui contient les fonctions qui vont modifier l'état de mon application.
	 */
	reducers: {
		addTodo: (state, action) => {
			/**
			 * action =>
			 * {
			 *  type: "todos/addTodo"
			 *  payload: "Ma nouvelle tâche"
			 * }
			 */
			const newTodo = {
				id: Date.now(),
				text: action.payload,
				completed: false,
			};

			state.push(newTodo);
		},
		toggleTodo: (state, action) => {
			/**
			 * action =>
			 * {
			 *   type: "todos/toggleTodo",
			 *   payload: 1
			 * }
			 * */
			const todo = state.find((todo) => todo.id === action.payload);
			todo.completed = !todo.completed;
		},
		deleteTodo: (state, action) => {
			/**
			 * action =>
			 * {
			 *   type: "todos/deleteTodo",
			 *   payload: 1
			 * }
			 */
			state = state.filter((todo) => todo.id !== action.payload);
			return state;
		},
	},
});

/**
 * todoSlice.actions contient les fonctions générées par createSlice.
 */

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

/**
 * todoSlice.reducer est une fonction qui va retourner le state modifié par les reducers.
 * C'est cette fonction que l'on va passer à notre store
 */
export const store = configureStore({
	reducer: {
		todos: todoSlice.reducer,
	},
});
