import { Provider } from "react-redux";
import TaskForm from "./components/TaskForm";
import TasksHeader from "./components/TasksHeader";
import TasksList from "./components/TasksList";
import { store } from "./store/redux";

export default function App() {
	return (
		<Provider store={store}>
			<div className="container">
				<article>
					<TasksHeader />
					<TasksList />
					<footer>
						<TaskForm />
					</footer>
				</article>
			</div>
		</Provider>
	);
}
