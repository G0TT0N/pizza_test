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

    componentDidMount() {
        this.props.getEmployees(employees);
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props, 'prevProps');
        // console.log(this.state.data, 'prevState');
        if (this.state.data.length < this.props.emplData.length) {
            this.setState({
                data: this.props.emplData.concat()
            });
        }
    }

    buttonBirth = (sortField) => {
        const clonedEmpl = this.state.data.concat();

        const newDate = clonedEmpl.map(key => {
            let year = key.birthday.substr(6, 4);
            let month = key.birthday.substr(3, 2) - 1;
            let day = key.birthday.substr(0, 2);
            key.birthday = +new Date(year, month, day);
            return key
        });

        const sortType = this.state.sort === "asc" ? 'desc' : 'asc';
        const orderedData = _.orderBy(newDate, sortField, sortType);

        orderedData.forEach(date => {
            date.birthday = new Date(date.birthday);
            let year = date.birthday.getFullYear();
            let month = date.birthday.getMonth() + 1;
            let day = date.birthday.getDate();
            if (day < 10) {
                day = '0' + day
            }
            if (month < 10) {
                month = '0' + month
            }

            date.birthday = day + '.' + month + '.' + year;
        });

        this.setState({
            data: orderedData,
            sort: sortType,
            sortField,
        });
    };

    onSort = sortField => {
        const clonedEmpl = this.state.data.concat();
        const sortType = this.state.sort === "asc" ? 'desc' : 'asc';
        const orderedData = _.orderBy(clonedEmpl, sortField, sortType);

        // console.log(orderedData);
        this.setState({
            data: orderedData,
            sort: sortType,
            sortField,
        });
    };

    render() {
        // console.log(this.props, 'props');
        // console.log(this.state.data, 'state Container');
        return (
            <Employees
                data={this.state.data}
                onSort={this.onSort}
                buttonBirth={this.buttonBirth}
            />
        )
    };
}

let mapStateToProps = (state) => {
    return {
        emplData: state.employeesList,
    }
};

export default connect(mapStateToProps, {getEmployees})(EmployeesContainer);
