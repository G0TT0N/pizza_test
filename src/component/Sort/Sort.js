import React from 'react';

const Sort = (props) => {
    return (
        <div className='sort__wrapper'>
            <div className={'sort__block'}>
                <span>Сортировка</span>
                <button onClick={props.buttonName.bind(null, 'name')}>По имени</button>
                <button onClick={props.buttonBirth.bind(null, 'birthday')}>По дате рождения</button>
            </div>
            <div className={'sort__block'}>
                <span>Фильтрация по должностям</span>
                <button onClick={props.buttonRole.bind(null, 'driver')}>Водители</button>
                <button onClick={props.buttonRole.bind(null, 'cook')}>Повара</button>
                <button onClick={props.buttonRole.bind(null, 'waiter')}>Официанты</button>
            </div>
            <div className={'sort__block'}>
                <span>Фильтрация по архиву</span>
                <button onClick={props.buttonArchive.bind(null, 'isArchive')}>В архиве</button>
                <button onClick={props.buttonArchive.bind(null, 'isArchiveNon')}>Не в архиве</button>
            </div>
            <div className={'sort__block'}>
                <span>Сброс таблицы</span>
                <button onClick={props.buttonReset}>Сброс</button>
            </div>
        </div>
    );
};

export default Sort;
