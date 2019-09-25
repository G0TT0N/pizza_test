import React from 'react';
import employees from '../../employees';

let Employees = (props) => {
    console.log(props);
    if(props.emplData.length === 0){
        props.showList(employees);
    }
    return (
        <div>
            <div>
                {props.emplData.map(empl => (
                    <div key={empl.id}>
                        <div>{empl.id}</div>
                    </div>))}
            </div>
        </div>
    );
};

export default Employees;



