import React, {Component, useEffect} from 'react';
import employees from '../../employees';
import SortContainer from "../../Containers/SortContainer";

import './Employee.scss'

class Employees extends Component {
    componentDidMount() {
        if (this.props.emplData.length === 0) {
            this.props.showList(employees);
            console.log(this.props)
        }
    };

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props)

    }

    render() {
        return (
            <div className={'table'}>
                <SortContainer/>
                <div className={'table__header'}>
                    <div className={'table__header-item'}>№</div>
                    <div className={'table__header-item'}>Имя</div>
                    <div className={'table__header-item'}>Должность</div>
                    <div className={'table__header-item'}>Телефон</div>
                    <div className={'table__header-item'}>Архив</div>
                </div>
                <div>
                    {this.props.emplData.map(empl => (
                        <div key={empl.id} className={'table__body'}>
                            <div className={'table__body-item'}>{empl.id}</div>
                            <div onClick={this.props.onClickFoo} className={'table__body-item'}>{empl.name}</div>
                            <div className={'table__body-item'}>{empl.role}</div>
                            <div className={'table__body-item'}>{empl.phone}</div>
                            <div className={'table__body-item'}>{empl.isArchive ? 'В архиве' : ''}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default Employees;



