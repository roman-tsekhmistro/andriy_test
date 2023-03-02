import AddTaskForm from '../components/AddTaskForm/AddTaskForm';
import TaskList from '../components/TaskList';
import styles from './home-page.module.scss';

const HomePage = () => {
	return (
		<div className={styles.home_page_wrapper}>
			<AddTaskForm />
			<TaskList />
		</div>
	);
};

export default HomePage;
