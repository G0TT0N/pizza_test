import React, {Component} from 'react';
import {connect} from "react-redux";
import {getEditEmployees} from "../../redux/reducers/employeesEditRdc";

class EmployeesEdit extends Component {

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props, 'prevProps');
        // console.log(this.state.data, 'prevState');

    }


    render() {
        console.log(this.props.targetEmpl);
        // console.log(this.state);
        return (
            <div>
                имя
                <input type="text" placeholder={this.props.targetEmpl.name}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    console.log(state, 'state Target');
    return {
        targetEmpl: state.employeesList.targetEmpl[0],
    }
};

export default connect(mapStateToProps, {getEditEmployees})(EmployeesEdit);
