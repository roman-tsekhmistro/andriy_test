import AddTaskInput from '../common/AddTaskInput';

const FormInputs = () => {
	const Inputs = [
		{ textForLabel: 'Title:', placeholderForInput: 'Enter title', id: 'title' },
		{
			textForLabel: 'Description:',
			placeholderForInput: 'Enter description',
			id: 'description',
		},
	];

	return (
		<>
			{Inputs.map((item, index) => (
				<AddTaskInput key={index} inputInfo={item} />
			))}
		</>
	);
};

export default FormInputs;
