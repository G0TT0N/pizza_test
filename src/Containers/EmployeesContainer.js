import React from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
import employees from "../employees";
import Employees from "../component/Employees/Employees";
import {getEmployees, setEmployeesData} from "../redux/reducers/employeesRdc";


class EmployeesContainer extends React.Component {
    state = {
        sort: 'asc',
    };

    componentDidMount() {
        this.props.getEmployees(employees);
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props, 'prevProps');
        // console.log(this.state.data, 'prevState');
        if (this.props.emplData === prevProps.emplData) {
            this.props.setEmployeesData(this.props.emplData)
        }
    }

    buttonName = sortField => {
        const clonedEmpl = this.props.emplData.concat();
        const sortType = this.state.sort === "asc" ? 'desc' : 'asc';
        const orderedData = _.orderBy(clonedEmpl, sortField, sortType);

        this.props.setEmployeesData(orderedData);

        this.setState({
            sort: sortType,
        });
    };

    buttonBirth = (sortField) => {
        const clonedEmpl = this.props.emplData.concat();
        console.log(clonedEmpl);

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

        this.props.setEmployeesData(orderedData);

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

        this.props.setEmployeesData(arr);
    };

    buttonArchive = archive => {
        const clonedEmpl = this.props.emplData.concat();
        let arr = [];

        if (archive === 'isArchive') {
            arr = clonedEmpl.filter(archive => archive.isArchive);
        } else if (archive === 'isArchiveNon') {
            arr = clonedEmpl.filter(archive => archive.isArchive === false);
        }

        this.props.setEmployeesData(arr);
    };

    buttonReset = () => {
        this.props.setEmployeesData(employees);
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
                />
            </React.Fragment>
        )
    };
}

let mapStateToProps = (state) => {
    // console.log(state.employeesList);

    return {
        emplData: state.employeesList,
    }
};

export default connect(mapStateToProps, {getEmployees, setEmployeesData})(EmployeesContainer);
