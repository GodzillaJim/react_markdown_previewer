import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Row, Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import rasterizeHTML from 'rasterizehtml';
import './style.css';
const showdown = require('showdown');
import $ from 'jquery';


class Body extends React.Component{
  constructor(props){
    super(props);
    let init = "A man who says I am king is not true king.";
    this.state = {
      originalText : "##Kenya",
      finalText:"",
      temp:init
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }
 handleUpdate = () => {
   let temp = document.getElementById("editor").value;
    this.setState({originalText:temp});
    let converter = new showdown.Converter();
    this.setState({finalText:converter.makeHtml(this.state.originalText)});
    document.getElementById("preview").innerHTML = this.state.finalText;
 }
 componentDidMount(){
   this.handleUpdate;
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
            <div id="preview" style={{backgroundColor:" darkslategrey",color:"red"}}className="form-control"></div>
          </div>
        </div>
        </div>
      </div>
    );
  }
} 
export default Body;