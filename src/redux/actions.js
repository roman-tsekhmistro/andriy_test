export const ADD_TASK = 'ADD_TASK';
export const CHANGE_STATUS_FOR_TASK = 'CHANGE_STATUS_FOR_TASK';

export const addTaskInTaskList = (task) => ({
	type: ADD_TASK,
	task,
});

export const changeStatusForTask = (id, status) => ({
	type: CHANGE_STATUS_FOR_TASK,
	id,
	status,
});
