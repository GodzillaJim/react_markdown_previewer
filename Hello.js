import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Row, Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import rasterizeHTML from 'rasterizehtml';
import './style.css';
const showdown = require('showdown');
import $ from 'jquery';
import marked from 'marked';
showdown.setOption({'omitExtraWLInCodeBlocks':true});
showdown.setOption({'noHeaderId':true});
showdown.setOption({'strikethrough':true});
showdown.setOption({'tables':true});
showdown.setOption({'smartIndentationFix':true});


class Body extends React.Component{
  constructor(props){
    super(props);
    const converter = new showdown.Converter();
    marked.setOptions({
    breaks: true,
    headerIds:false,
    sanitize: true,
    smartLists: false,
    smartypants: false,
    xhtml: false,
    gfm:true
});
    let init = `# Welcome to my markdown previewer
\n## It is pretty simple, just type in markdown and you get HTML
You can add links like this
    [links](https://www.jimna.dx.am)
You can use some inline code, \`<div></div>\`, between 2 backticks.

Or you can choose to use a block of code:
   
\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
There are lists too:
  - And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...

You can add quotes like what Ramsy Bolton said the other day:
> If you think this has a happy ending for you, you haven't been paying attention.

Now put the names Ramsey Bolton in bold:
  **Ramsey Bolton**
And then there is an image
  ![React Logo w/ Text](https://www.shutterstock.com/image-vector/web-line-icon-silhouette-cats-cat-404924038)
    `;
    let converter = new showdown.Converter();


    this.state = {
      originalText : init,
      finalText:marked(init),
      temp:init
    };
    this.handleUpdate = this.handleUpdate.bind(this);
   
  }
 handleUpdate = () => {
   let markdown = document.getElementById('editor').value;
   const converter = new showdown.Converter();
   
   this.setState({
     originalText:markdown,
     finalText:marked(markdown)
   });
   document.getElementById('preview').innerHTML = marked(markdown);
 }
 componentDidMount(){
    document.getElementById('preview').innerHTML = this.state.finalText;
  }
  render(){
    return (
      <div>
        <div className="container contain col-12">
          <div className="row form-class">
            <div className="col contain">
            <label for="editor" className=" form-label">Editor:</label>
            <textarea className=" form-control" id="editor"  onChange={this.handleUpdate}>{this.state.originalText}</textarea>
          </div>
           <div className="col  contain">
            <label for="editor" className="form-label">Preview:</label>
            <div id="preview" style={{backgroundColor:" darkslategrey",color:"white",overflow:"scroll"}} className="form-control"></div>
          </div>
        </div>
        </div>
      </div>
    );
  }
} 
export default Body;