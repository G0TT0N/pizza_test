const GET_EMPLOYEES = 'GET_EMPLOYEES';
const SET_EMPLOYEES_DATA = 'SET_EMPLOYEES_DATA';

const employeesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return [...state, ...action.empl];
        case SET_EMPLOYEES_DATA:
            return state =  [...action.emplData];
        default:
            return state;
    }
};

export const getEmployees = (empl) => ({type: GET_EMPLOYEES, empl});
export const setEmployeesData = (emplData) => ({type: SET_EMPLOYEES_DATA, emplData});


export default employeesReducer;



