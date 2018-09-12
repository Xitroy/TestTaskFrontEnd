import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Contact from '../Surface/Contact';
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
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
