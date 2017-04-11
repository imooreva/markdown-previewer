var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');
//var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Editor = require('Editor');
var Preview = require('Preview');

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

var markdownPreset = 'Here is _some_ __marked__ text!';

class App extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            markdown: markdownPreset
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            markdown: e.target.value
        });
    }
    
    render() {
        var renderedMarkdown = $('#preview').html(marked(this.state.markdown));
        return (
            <div id="main">
                <div className="row">
                    <div className="column small-centered medium-8 large-10">
                        <h2>Markdown Previewer</h2>
                        <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
                        <Preview markdown={renderedMarkdown}/>
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
