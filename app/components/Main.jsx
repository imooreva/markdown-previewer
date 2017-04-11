var React = require('react');
var Editor = require('Editor');
var Preview = require('Preview');

var Main = (props) => {
    return (
        <div id="main">
            <div className="row">
                <div className="column small-centered medium-6 large-8">
                    <h2 id="main-header">Markdown Previewer</h2>
                    <Editor/>
                    <Preview/>
                </div>
            </div>
        </div> 
    );
};

module.exports = Main;
