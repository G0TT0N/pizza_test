import React from 'react';
import Employees from "../component/Employees/Employees";
import {getEmployees} from "../redux/reducers/employeesRdc";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    console.log(state);

    return {
        emplData: state.employeesList
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        showList: (empl) => {
            dispatch(getEmployees(empl))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Employees) ;
