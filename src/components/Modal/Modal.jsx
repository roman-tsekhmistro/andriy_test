import { useSelector, useDispatch } from 'react-redux';
import { changeStatusForTask } from '../../redux/actions';
import styles from './modal.module.scss';

const Modal = ({ isOpen, onClose, task }) => {
	const { title, description, id } = task;
	const currentTask = useSelector((state) =>
		state.tasks.find((taskInState) => taskInState.id === id)
	);
	const dispatch = useDispatch();

	if (!isOpen) return null;

	return (
		<div className={styles.modal_wrapper}>
			<div className={styles.modal_card}>
				<h1>{title}</h1>
				<h4>{description}</h4>
				<span>
					Status:{' '}
					<input
						type='checkbox'
						onChange={() => dispatch(changeStatusForTask(id, false))}
						checked={currentTask.status}
					/>
				</span>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default Modal;
