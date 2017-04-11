var React = require('react');
var ReactDOM = require('react-dom');
//var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Editor = require('Editor');
var Preview = require('Preview');

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            markdown: 'Some text is supposed to go here' 
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            markdown: e.target.value
        });
    }
    
    render() {        
        return (
            <div id="main">
                <div className="row">
                    <div className="column small-centered medium-8 large-10">
                        <h2>Markdown Previewer</h2>
                        <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
                        <Preview markdown={this.state.markdown}/>
                    </div>
                </div>
            </div> 
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);