import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/redux";

const TaskForm = () => {
	const [text, setText] = useState("");
	const dispath = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		dispath(addTodo(text));

		setText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Ajouter une tâche"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</form>
	);
};

export default TaskForm;
