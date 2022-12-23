import * as at from './actionTypes';

/** Action creator for each action type */

// All employees
export const fetchAllEmployees = (employees) => {
    return {
        type: at.FETCH_ALL_EMPLOYEES,
        payload: employees,
    };
};

//Single employee
export const fetchEmployee = (employee) => {
    return {
        type: at.FETCH_EMPLOYEE,
        payload: employee,
    };
};
// Add Employee
export const addEmployee = (employee) => {
    return {
        type: at.ADD_EMPLOYEE,
        payload: employee,
    };
};

// Delete employee
export const deleteEmployee = (employeeId) => {
    return {
        type: at.DELETE_EMPLOYEE,
        payload: employeeId,
    };
};

// Edit Employee
export const editEmployee = (employee) => {
    return {
        type: at.EDIT_EMPLOYEE,
        payload: employee,
    };
};



//All tasks
export const fetchAllTasks = (tasks) => {
    return {
        type: at.FETCH_ALL_TASKS,
        payload: tasks,
    };
};

//Single task
export const fetchTask = (task) => {
    return {
        type: at.FETCH_TASK,
        payload: task,
    };
};

// Add task
export const addTask = (task) => {
    return {
        type: at.ADD_TASK,
        payload: task,
    };
};

// Delete task
export const deleteTask = (taskId) => {
    return {
        type: at.DELETE_TASK,
        payload: taskId,
    };
};

// Edit Task
export const editTask = (task) => {
    return {
        type: at.EDIT_TASK,
        payload: task,
    };
};

