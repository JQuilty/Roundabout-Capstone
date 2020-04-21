import React, { Component } from 'react';
import Participant from "./participant.component";

export default class Match extends Component {
  constructor(props) {
    super(props);

    this.addTop = this.addTop.bind(this);
    this.addTop = this.addBottom.bind(this);
    this.declareWinner = this.declareWinner.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        topParticipant: 'Bob',
        bottomParticipant: 'Bill',
        winner: 'TBD'
    }

    
  }

  onSubmit(e) {
    e.preventDefault();

    const newMatch = {
    topParticipant: this.state.topParticipant,
    bottomParticipant: this.state.bottomParticipant,
    }

    console.log(newMatch);

    window.location = '/match';
  }
   

  addTop(e) {
    this.setState({
        topParticipant: e.target.value
    })
  }

  addBottom(e) {
    this.setState({
        bottomParticipant: e.target.value
    })
  }

  declareWinner(e) {
    this.setState({
        winner: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <div id="TopParticipant" value={this.state.topParticipant}>
            <label>Top Participant: {this.state.topParticipant}</label>
        </div>
        <div id="BottomParticipant" value={this.state.bottomParticipant}>
            <label>Bottom Participant: {this.state.bottomParticipant}</label>
        </div>
        <div id="Winner" value={this.state.winner}>
            <label>Match Winner: {this.state.winner}</label>
        </div>
        <form onSubmit={this.onSubmit}>
            <div className="addTop">
                <label>Top Participant: </label>
                <input type="text"
                value={this.state.topParticipant}
                onChange={this.addTop}
                />
            </div>
            <div className="addBottom">
                <label>Bottom Participant: </label>
                <input type="text"
                value={this.state.bottomParticipant}
                onChange={this.addBottom}
                />
            </div>
            <div className="declareWinner">
                <label>Winner: </label><br></br>
                <input type="radio" id="top" name="winner" value={this.state.topParticipant} onChange={this.declareWinner}/>
                <label htmlFor="top">Top Participant</label><br></br>
                <input type="radio" id="bottom" name="winner" value={this.state.bottomParticipant} onChange={this.declareWinner}/>
                <label htmlFor="top">Bottom Participant</label><br></br>
            </div>
        </form>
      </div>
    )
  }
}