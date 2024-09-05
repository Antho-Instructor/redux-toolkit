import { useDispatch } from "react-redux";

const TaskItem = (props) => {
	const { task, toggleTask, deleteTask } = props;

	const dispath = useDispatch();

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={task.done}
					onChange={() =>
						dispath({
							type: "todos/toggleTodo",
							payload: task.id,
						})
					}
				/>
				{task.text}

				<span
					onClick={() =>
						dispath({ type: "todos/deleteTodo", payload: task.id })
					}
					role="button"
					style={{ padding: "5px", marginLeft: "20px" }}
				>
					X
				</span>
			</label>
		</div>
	);
};

export default TaskItem;
