import React from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
import employees from "../employees";
import Employees from "../component/Employees/Employees";
import {getEmployees, routeTargetEmployees} from "../redux/reducers/employeesRdc";


class EmployeesContainer extends React.Component {
    state = {
        sort: 'asc',
    };

    componentDidMount() {
        if (!this.props.emplData) {
            this.props.getEmployees(employees);
        }
    }

    buttonName = sortField => {
        const clonedEmpl = this.props.emplData.concat();
        const sortType = this.state.sort === "asc" ? 'desc' : 'asc';
        const orderedData = _.orderBy(clonedEmpl, sortField, sortType);

        this.props.getEmployees(orderedData);

        this.setState({
            sort: sortType,
        });
    };

    buttonBirth = (sortField) => {
        const clonedEmpl = this.props.emplData.concat();
        const sortType = this.state.sort === "asc" ? 'desc' : 'asc';

        const newDate = clonedEmpl.map(key => {
            let year = key.birthday.substr(6, 4);
            let month = key.birthday.substr(3, 2) - 1;
            let day = key.birthday.substr(0, 2);
            key.birthday = +new Date(year, month, day);
            return key
        });

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

        this.props.getEmployees(orderedData);

        this.setState({
            sort: sortType,
        });
    };


    buttonRole = sortField => {
        const stateClone = this.props.emplData.concat();
        let arr = [];

        if (sortField === 'driver') {
            arr = stateClone.filter(data => data.role === 'driver');
        } else if (sortField === 'cook') {
            arr = stateClone.filter(data => data.role === 'cook');
        } else if (sortField === 'waiter') {
            arr = stateClone.filter(data => data.role === 'waiter');
        }

        this.props.getEmployees(arr);
    };

    buttonArchive = archive => {
        const clonedEmpl = this.props.emplData.concat();
        let arr = [];

        if (archive === 'isArchive') {
            arr = clonedEmpl.filter(archive => archive.isArchive);
        } else if (archive === 'isArchiveNon') {
            arr = clonedEmpl.filter(archive => archive.isArchive === false);
        }

        this.props.getEmployees(arr);
    };

    buttonReset = () => {
        this.props.getEmployees(employees);
    };

    getTargetEmpl = (e) => {
        let clonedEmpl = [...this.props.emplData];
        let targetEmpl = clonedEmpl.filter(item => {
            if (item.name === e.target.innerText) return item
        });

        this.props.routeTargetEmployees(targetEmpl);
    };

    render() {
        // console.log(this.props.emplData, 'props');
        // console.log(this.state.data, 'state Container');
        return (
            <React.Fragment>
                <Employees
                    data={this.props.emplData}
                    buttonName={this.buttonName}
                    buttonBirth={this.buttonBirth}
                    buttonRole={this.buttonRole}
                    buttonArchive={this.buttonArchive}
                    buttonReset={this.buttonReset}
                    sort={this.state.sort}
                    getTargetEmpl={this.getTargetEmpl}
                />
            </React.Fragment>
        )
    };
}

let mapStateToProps = (state) => {
    // console.log(state);
    return {
        emplData: state.employeesList.newEmplData,
    }
};

export default connect(mapStateToProps, {
    getEmployees,
    routeTargetEmployees
})(EmployeesContainer);
