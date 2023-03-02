import { ADD_TASK, CHANGE_STATUS_FOR_TASK } from './actions';

const initialValue = {
	tasks: [],
};

export function toDoReducer(state = initialValue, action) {
	switch (action.type) {
		case ADD_TASK:
			return { ...state, tasks: [...state.tasks, action.task] };

		case CHANGE_STATUS_FOR_TASK:
			return {
				...state,
				...(state.tasks.find((task) => task.id === action.id).status =
					action.status),
			};

		default:
			return state;
	}
}
