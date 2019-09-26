import React from 'react';
import _ from 'lodash';
import Employees from "../component/Employees/Employees";
import {getEmployees} from "../redux/reducers/employeesRdc";
import {connect} from "react-redux";
import employees from "../employees";


class EmployeesContainer extends React.Component {
    state = {
        data: [],
        sort: 'asc',
        sortField: 'id',
    };


    loadData = (data) => {
        this.props.showList(data);
    };

    buttonBirth = () => {
        let a = [...this.state.data];
        a.map(key => {})
    };



    componentDidMount() {
        if (this.state.data.length === 0) {
            this.loadData(employees);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props, 'prevProps');
        // console.log(this.state, 'prevState');
        if (this.state.data.length < this.props.emplData.length) {
            this.setState({
                data: this.props.emplData
            });
        }
    }

    onSort = sortField => {
        const clonedEmpl = [...this.state.data];
        const sortType = this.state.sort === "asc" ? 'desc' : 'asc';
        const orderedData = _.orderBy(clonedEmpl, sortField, sortType);
        this.setState({
            data: orderedData,
            sort: sortType,
            sortField,
        });
    };

    render() {
        // console.log(this.state, 'state');
        // console.log(this.props, 'props');
        return (
            <Employees data={this.state.data} onSort={this.onSort} buttonBirth={this.buttonBirth}/>
        )
    };
}

let mapStateToProps = (state) => {
    return {
        emplData: state.employeesList,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        showList: (empl) => {
            dispatch(getEmployees(empl))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
