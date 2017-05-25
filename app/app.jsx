var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

//components
var Main = require('Main');
var Editor = require('Editor');
var Preview = require('Preview');
var Footer = require('Footer');

//load foundation and app styles
$(document).foundation();
require('style!css!sass!applicationStyles')

//configure marked to interpret link breaks via return key
marked.setOptions({
    breaks: true
});

var markdownPreset = `## Here's a heading...

### ...and here's a sub-heading
---
Text styles include **bold**, *italic*, \`monospace\`, ~~strikethrough~~, and **_bold italic_**.

>>Here's a link to Github inside of a blockquote
>>[Link](http://www.github.com)

1. List items are __easy.__
1. Just use the \`1.\` prefix for all items, and add/delete items as needed.
1. Less mess! _There's no need to renumber when you make changes._

An \`inline code block\` looks like this...

\`\`\`
...and here is a code block.
\`\`\`
`

class App extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            markdown: markdownPreset
        };
        this.handleChange = this.handleChange.bind(this);
    }
    //update state when typing in editor
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
                        <h1 id="main-header">Markdown Previewer</h1>
                        <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
                        <Preview markdown={marked(this.state.markdown)}/>
                        <Footer/>
                    </div>
                </div>
            </div> 
        );
    }
};

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
