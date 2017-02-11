import * as React from 'react'; 
import { Component } from 'react';
import './app.css';
import logo from './logo.svg';

class App extends Component<{}, {}> {

    render() {
        setTimeout(() => {
        FuseBox.import("./lazy.js", (module) => {
            const { Lazy } = FuseBox.import("./lazy");
            let m = new Lazy();
            m.say();
        })
        }, 1000);
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React!</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
