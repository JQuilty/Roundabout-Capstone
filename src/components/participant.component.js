import React, { Component } from 'react';

export default class Participant extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        wins: 0
    }

    
  }

  onSubmit(e) {
    e.preventDefault();

    const newParticipant = {
    name: this.state.name,
    wins: this.state.wins
    }

    console.log(newParticipant);

    window.location = '/';
  }
   

  onChangeName(e) {
    this.setState({
        name: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <div className="addParticipantForm">
                <label>Participant or Team Name: </label>
                <input type="text"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                />
            </div>
        </form>
      </div>
    )
  }
}