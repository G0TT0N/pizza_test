import React from 'react';
import './Employee.scss'

class Employees extends React.Component {
// `${new Date(empl.birthday.split('.').reverse())}`

    render() {
        return (
            <div>
                <div className={'sort__wrapper'}>
                    <span>Сортировка и фильтрация</span>
                    <button onClick={this.props.onSort.bind(null, 'name')}>По имени</button>
                    <button onClick={this.props.onSort.bind(null, 'birthday')}>По дате рождения</button>
                </div>
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
                    {this.props.data.map(empl => (
                        <tr key={empl.id} className={'table__body'}>
                            <td className={'table__body-item'}>{empl.id}</td>
                            <td className={'table__body-item'}>{empl.name}</td>
                            <td className={'table__body-item'}>{empl.birthday}</td>
                            <td className={'table__body-item'}>{empl.role}</td>
                            <td className={'table__body-item'}>{empl.phone}</td>
                            <td className={'table__body-item'}>{empl.isArchive ? 'В архиве' : ''}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {/*<div>*/}
                {/*    {this.props.data[0] &&*/}
                {/*    console.log(`${new Date(this.props.data[0].birthday.split('.').reverse())}`)*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        );
    };
}

export default Employees;



