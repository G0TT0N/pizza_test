const GET_EMPLOYEES = 'GET_EMPLOYEES';
// const ADD_EMPLOYEES = 'ADD_EMPLOYEES';

const employeesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return [...state, ...action.empl];
        default:
            return state;
    }
};

export const getEmployees = (empl) => ({type: GET_EMPLOYEES, empl});


export default employeesReducer;



