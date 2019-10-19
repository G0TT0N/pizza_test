import React, {Component} from 'react';
import {connect} from "react-redux";
import {getEditEmployees} from "../../redux/reducers/employeesEditRdc";
import {NavLink} from "react-router-dom";

class EmployeesEdit extends Component {
    state = {
        emplData: false
    };

    componentDidMount() {
        if(this.props.targetEmpl){
            this.setState({
                emplData: true
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props, 'prevProps');
        // console.log(this.state.data, 'prevState');

    }


    render() {
        // console.log(this.props.targetEmpl);
        console.log(this.state.emplData);
        return (
            <div>
                {!this.state.emplData
                    ? <div><NavLink to='/'>Выберите сотрудника</NavLink></div>
                    : <div>
                        <div>
                            имя {this.props.targetEmpl[0].name}
                            <button> Изменить</button>
                        </div>
                        <div>
                            дата рождения {this.props.targetEmpl[0].birthday}
                            <button> Изменить</button>
                        </div>
                        <div>
                            телефон {this.props.targetEmpl[0].phone}
                            <button> Изменить</button>
                        </div>
                        <div>
                            должность {this.props.targetEmpl[0].role}
                            <button> Изменить</button>
                        </div>
                        <div>
                            архив {this.props.targetEmpl[0].isArchive}
                            <button> Изменить</button>
                        </div>
                    </div>}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    // console.log(state, 'state Target');
    return {
        targetEmpl: state.employeesList.targetEmpl,
    }
};

export default connect(mapStateToProps, {getEditEmployees})(EmployeesEdit);
