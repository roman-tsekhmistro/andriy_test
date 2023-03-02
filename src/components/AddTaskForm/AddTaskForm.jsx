import FormInputs from '../FormInputs';
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import styles from './add-task-form.module.scss';
import { addTaskInTaskList } from '../../redux/actions';
import { useSelector } from 'react-redux';
import Error from '../common/Error';

const AddTaskForm = () => {
	const dispatch = useDispatch();
	const storeListTasks = useSelector((state) => state.tasks.length);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (event.target[0].value === '' || event.target[1].value === '') {
			alert('Fill in the fields');
		} else {
			const task = {
				id: storeListTasks + 1,
				title: event.target[0].value,
				description: event.target[1].value,
				status: false,
			};
			dispatch(addTaskInTaskList(task));
		}
	};

	return (
		<form
			className={styles.form_wrapper}
			id='formForAddTask'
			onSubmit={(e) => handleSubmit(e)}
		>
			<FormInputs />
			<Button form={'formForAddTask'} />
		</form>
	);
};

export default AddTaskForm;
