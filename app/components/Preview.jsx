var React = require('react');

var Preview = (props) => {
    //use of dangerouslySetInnerHTML is not advisable, but it works
    return (
        <div id="preview"><span dangerouslySetInnerHTML={{__html : props.markdown}}/></div>    
    );
};

module.exports = Preview;
