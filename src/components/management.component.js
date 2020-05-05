import axios, { post } from 'axios';
import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';

export default class management extends Component {
  constructor(props) {
    super(props);

    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeURL = this.onChangeURL.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      nickname: '',
      age: 0,
      URL: ''
    }
  }
    
  

  
  onChangeName(submission) {
    this.setState({
      username: submission.target.value
    });
  }

  onChangeNickname(submission) {
    this.setState({
      nickname: submission.target.value
    });
  }

  onChangeAge(submission) {
    this.setState({
      age: submission.target.value
    });
  }

  onChangeURL(submission) {
    this.setState({
      URL: submission.target.value
    });
  }

  onSubmit(submission) {
    submission.preventDefault();

    const contestant = {
      username: this.state.username,
      nickname: this.state.nickname,
      age: this.state.age,
      URL: this.state.URL
      }

      console.log(contestant);
    }
  
  render() {
    return (


      <div>
        <h2>Adding Users Placeholder</h2>
        <form onSubmit={this.onSubmit}>
          <div className ="form-group">
            <p><label>Name:</label>
            <input type ="text"></input></p>
            <p><label>Nickname:</label>
            <input type ="text"></input></p>
            <p><label>Age:</label>
            <input type ="text"></input></p>
            <p><label>URL:</label>
            <input type ="text"></input></p>
            <p><label>Color:</label>
            <input type ="text"></input></p>

            <h2>Displaying Contestants Placeholders</h2>
          </div>
        </form>
        <CSVReader
  onDrop={this.handleOnDrop}
  onError={this.handleOnError}
  style={{}}
  config={{}}
  addRemoveButton
  onRemoveFile={this.handleOnRemoveFile}
>
  <span>Upload CSV File.</span>
</CSVReader>
      </div>
    )

  }
}