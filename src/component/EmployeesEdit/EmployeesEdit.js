import React, {Component} from 'react';
import {connect} from "react-redux";
import employees from "../../employees";
import {getEmployees} from "../../redux/reducers/employeesRdc";

class EmployeesEdit extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
        this.props.getEmployees(employees);
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props, 'prevProps');
        // console.log(this.state.data, 'prevState');
        if (this.state.data === prevState.data) {
            this.setState({
                data: this.props.emplData.concat()
            });
        }
    }


    render() {
        console.log(this.props);
        return (
            <div>
                123
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    // console.log(state);

    return {
        emplData: state.employeesList,
    }
};

export default connect(mapStateToProps, {getEmployees})(EmployeesEdit);
