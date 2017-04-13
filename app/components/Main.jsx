var React = require('react');
var Editor = require('Editor');
var Preview = require('Preview');
var Footer = require('Footer');

var Main = (props) => {
    return (
        <div id="main">
            <div className="row">
                <div className="column small-centered medium-8 large-10">
                    <h2 id="main-header">Markdown Previewer</h2>
                    <Editor/>
                    <Preview/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
