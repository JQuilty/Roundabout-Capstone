import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateTournament extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: 'Title',
      location: '',
      email: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    this.setState({ 
      users: ['test title'],
      title: 'test title'
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const exercise = {
      title: this.state.title,
      location: this.state.location,
      email: this.state.email,
      date: this.state.date,
    };
  
    console.log(exercise);
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h1>New Tournament</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
                />
          </div>
          <div className="form-group"> 
            <label>Location: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Tournament" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}