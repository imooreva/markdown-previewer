var React = require('react');

var Footer = () => {
    return (
        <div id="footer" className="docFill">
            <p>Made with Express, Foundation, Marked and React.<br/>
            Author's source code on <a href="https://github.com/imooreva/markdown-previewer" target="_blank">Github</a>.</p>
        </div>    
    );
};

//jQuery code fills up vertical space dynamically
//solution source: http://foundation.zurb.com/forum/posts/2896-row-height
var docFill = () => {
    event.preventDefault();
    if ($(document).height() <= $(window).height()) {
        $('.docFill').css('height',$(window).height()-$('body').height()+$('.docFill').height());
    } else {
        $('.docFill').css('height','auto');
    };
};
$(document).ready(docFill);
$(window).resize(docFill);

module.exports = Footer;
