import styles from './list-task-item.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeStatusForTask } from '../../../redux/actions';

import Modal from '../../Modal';

const ListTaskItem = ({ task }) => {
	const { id, title, description } = task;
	const [isOpen, setIsOpen] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const dispatch = useDispatch();

	return (
		<>
			<li className={styles.list_item_wrapper}>
				<div className={styles.info_wrapper} onClick={() => setIsOpen(!isOpen)}>
					<span> {id}</span>
					<span> {title}</span>
					<span> {description}</span>
				</div>
				<input
					type='checkbox'
					name='status'
					id={id}
					onChange={() => {
						setIsChecked(true);
						dispatch(changeStatusForTask(id, isChecked));
					}}
				/>
			</li>
			<Modal
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false);
				}}
				task={task}
			/>
		</>
	);
};

export default ListTaskItem;
