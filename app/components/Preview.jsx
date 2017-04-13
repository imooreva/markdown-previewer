var React = require('react');

var Preview = (props) => {
    //use of dangerouslySetInnerHTML is not advisable, but it works
    return (
        <div>
           <h4>Preview</h4>
           <div id="preview"><span dangerouslySetInnerHTML={{__html : props.markdown}}/>
           </div>
        </div>
            
    );
};

module.exports = Preview;
