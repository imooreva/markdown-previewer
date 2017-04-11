var React = require('react');

var Preview = (props) => {
    return (
        <div id="preview">{props.markdown}</div>    
    );
};

module.exports = Preview;
