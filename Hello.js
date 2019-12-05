import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Row, Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import './style.css';

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      originalText : ""
    }
  }
  render(){
    return (
      <div>
        <div className="container contain col-12">
          <div className="row form-class">
            <div className="col contain">
            <label for="editor" className=" form-label">Editor:</label>
            <textarea className=" form-control" id="editor"></textarea>
          </div>
           <div className="col  contain">
            <label for="editor" className="form-label">Preview:</label>
            <textarea style={{backgroundColor:" darkslategrey"}}className=" form-control"></textarea>
          </div>
        </div>
        </div>
      </div>
    );
  }
} 
export default Body;