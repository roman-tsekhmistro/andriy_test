import { useState } from 'react';
import styles from './add-task-input.module.scss';

const AddTaskInput = ({ inputInfo }) => {
	const { textForLabel, placeholderForInput, id } = inputInfo;
	const [inputError, setinputError] = useState('This field is empty');

	const handleInput = (e) => {
		if (e.currentTarget.value === '') {
			return (
				(e.target.placeholder = inputError),
				(e.target.style.borderColor = 'red')
			);
		}
	};

	return (
		<div className={styles.input_wrapper}>
			<label htmlFor={textForLabel}>{textForLabel}</label>

			<input
				onChange={(e) => handleInput(e)}
				placeholder={placeholderForInput}
				type='text'
				id={id}
			/>
		</div>
	);
};

export default AddTaskInput;
