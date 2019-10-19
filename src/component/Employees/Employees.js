import React from 'react';
import './Employee.scss'
import SortField from "../Sort/SortField";
import {NavLink} from "react-router-dom";


class Employees extends React.Component {
    render() {
        // console.log(this.state.data, 'Employees state data');
        // console.log(this.props.data, 'Employees props data');
        return (
            <div>
                <SortField {...this.props}/>
                <table className={'table'}>
                    <thead>
                    <tr className={'table__header'}>
                        <th className={'table__header-item'}>№</th>
                        <th className={'table__header-item'}>Имя</th>
                        <th className={'table__header-item'}>Дата рождения</th>
                        <th className={'table__header-item'}>Должность</th>
                        <th className={'table__header-item'}>Телефон</th>
                        <th className={'table__header-item'}>Архив</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data && this.props.data.map(empl => (
                        <tr key={empl.id} className={'table__body'}>
                            <td className={'table__body-item'}>{empl.id}</td>
                            <td onClick={this.props.getTargetEmpl} className={'table__body-item'}><NavLink to='/emplEdit'>{empl.name}</NavLink></td>
                            <td className={'table__body-item'}>{empl.birthday}</td>
                            <td className={'table__body-item'}>{empl.role}</td>
                            <td className={'table__body-item'}>{empl.phone}</td>
                            <td className={'table__body-item'}>{empl.isArchive ? 'В архиве' : ''}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };
}

export default Employees;



