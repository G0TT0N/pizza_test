const GET_EMPLOYEES = 'GET_EMPLOYEES';
const SET_EMPLOYEES_DATA = 'SET_EMPLOYEES_DATA';
const ROUTE_TARGET_EMPLOYEES = 'ROUTE_TARGET_EMPLOYEES';

const employeesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            let newEmplData = [...action.empl];
            return {
                ...state,
                newEmplData
            };
        case ROUTE_TARGET_EMPLOYEES: {
            let targetEmpl = [...action.targetEmpl];
            return {
                ...state,
                targetEmpl
            }
        }
        default:
            return state;
    }
};

export const getEmployees = (empl) => ({type: GET_EMPLOYEES, empl});
export const routeTargetEmployees = (targetEmpl) => ({type: ROUTE_TARGET_EMPLOYEES, targetEmpl});


export default employeesReducer;



