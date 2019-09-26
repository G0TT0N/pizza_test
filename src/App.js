import React, {Component} from 'react';
import Preloader from "./component/Preloader/Preloader";
import EmployeesContainer from "./Containers/EmployeesContainer";

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
                    : <EmployeesContainer />

                }
            </div>
        );
    }
}



export default App ;
