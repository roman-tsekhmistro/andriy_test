import { useSelector } from 'react-redux';
import ListTaskItem from '../common/ListTaskItem';
import styles from './task-list.module.scss';

const TaskList = () => {
	const storeListTasks = useSelector((state) => state.tasks);
	return (
		<ul className={styles.list_wrapper}>
			<div className={styles.list_header_line}>
				<span>ID</span>
				<span>TITLE</span>
				<span>DESCRIPTION</span>
				<span>STATUS</span>
			</div>
			{storeListTasks.map((item, index) => (
				<ListTaskItem key={index} task={item} />
			))}
		</ul>
	);
};

export default TaskList;
