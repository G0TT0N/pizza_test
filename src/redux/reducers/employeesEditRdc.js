const GET_EDIT_EMPLOYEES = 'GET_EDIT_EMPLOYEES';


const employeesEditReducer = (state = [], action) => {
    switch (action.type) {
        case GET_EDIT_EMPLOYEES:
            let newEmplData = [...action.empl];
            return {
                ...state,
                newEmplData
            };

        default:
            return state;
    }
};

export const getEditEmployees = (empl) => ({type: GET_EDIT_EMPLOYEES, empl});


export default employeesEditReducer;
