import React, {Component} from 'react';
import Preloader from "./component/Preloader/Preloader";
import EmployeesContainer from "./containers/EmployeesContainer";
import {Route} from "react-router-dom";
import EmployeesEdit from "./component/EmployeesEdit/EmployeesEdit";

class App extends Component {
    state = {
        isLoading: true,
    };

    componentDidMount() {
        this.setState({
            isLoading: false,
        })
    }

    render() {
        return (
            <div className="wrapper">
                {this.state.isLoading
                    ? <Preloader/>
                    : <React.Fragment>
                        <Route exact path='/' component={EmployeesContainer}/>
                        <Route path='/emplEdit' component={EmployeesEdit}/>
                    </React.Fragment>
                }
            </div>
        );
    }
}



export default App ;
