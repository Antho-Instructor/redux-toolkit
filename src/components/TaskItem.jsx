import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/redux";

const TaskItem = (props) => {
	const { task } = props;

	const dispath = useDispatch();

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={task.done}
					onChange={() => dispath(toggleTodo(task.id))}
				/>
				{task.text}

				<span
					onClick={() => dispath(deleteTodo(task.id))}
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
