import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Row, Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import './style.css';


class Body extends React.Component{
  constructor(props){
    super(props);
    let init = "A man who says I am king is not true king.";
    this.state = {
      originalText : init,
      finalText:""
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }
 handleUpdate = () => {
   let temp = document.getElementById("editor").value;
   temp = marked(temp);
   this.setState({finalText: temp});
 }
  
  render(){
    return (
      <div>
        <div className="container contain col-12">
          <div className="row form-class">
            <div className="col contain">
            <label for="editor" className=" form-label">Editor:</label>
            <textarea className=" form-control" id="editor" value={this.state.originalText} onChange={this.handleUpdate}></textarea>
          </div>
           <div className="col  contain">
            <label for="editor" className="form-label">Preview:</label>
            <textarea value={this.state.initMarked} style={{backgroundColor:" darkslategrey",color:"red"}}className="form-control"></textarea>
          </div>
        </div>
        </div>
      </div>
    );
  }
} 
export default Body;