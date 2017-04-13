var React = require('react');

var Editor = (props) => {
    return (
        <div>
            <h4>Editor</h4>
            <textarea id="editor" type="text" placeholder="enter text here" value={props.markdown} onChange={props.onChange}>
            </textarea>
        </div>    
    );
};

module.exports = Editor;
