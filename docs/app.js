import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import MorphLogo from './Components/MorphLogo';
import TodoApp from './examples/todomvc/todoapp';
import { PrismCode } from "react-prism";
require('prismjs');
require('prismjs/components/prism-javascript');
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <hr/>
                <h2> Examples </h2>
                <h4> Todo Mvc </h4>
                <div className="grid">
                    <div className="col-2-1">
                        <div className="code-wrap">
                            <PrismCode className="language-javascript">
                                {require('raw!./examples/todomvc/example-code.txt')}
                            </PrismCode>
                        </div>
                    </div>
                    <div className="col-2-1">
                        <TodoApp />
                    </div>
                </div>
                <p style={{textAlign: 'center', marginTop: 50}}>
                    Made with <MorphLogo width={16} height={16} style={{verticalAlign: 'middle'}} /> by <a href="https://twitter.com/golenull">Goran Gajic</a> 2015
                </p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
