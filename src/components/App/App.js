import React, {Component} from 'react';
import Header from '../Header';
import Surface from '../Surface';
import Dialog from '../Dialog';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Surface/>
                <Dialog/>
            </div>
        );
    }
}

export default App;
