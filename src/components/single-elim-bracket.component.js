import React, { Component } from 'react';
import Match from "./match.component";

export default class SingleElimBracket extends Match {
  constructor(props) {
    super(props);

    var matchOne = new Match(topParticipant="Ted", bottomParticipant="Bill");
    matchOne.addTop({value: "Ted"});
    matchOne.addBottom("Bill");
    var matchTwo = new Match();
    matchTwo.addTop("Greg");
    matchTwo.addBottom("Toby");
    var matchThree = new Match();
    matchThree.addTop(matchOne.winner);
    matchThree.addBottom(matchTwo.winner);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        parName: '',
        wins: 0,
        matches: [matchOne, matchTwo, matchThree]
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newParticipant = {
    parName: this.state.parName,
    wins: this.state.wins
    }

    console.log(newParticipant);

    window.location = '/';
  }
  
  render() {
    return (
      <div>
        <h3>Match One</h3>
        <div>
          <button type="button" value={this.state.matches[0].topParticipant} onClick={this.declareWinner}>{this.state.matches[0].topParticipant}</button>
        </div>
        <div>
          <button type="button" value={this.state.matches[0].bottomParticipant} onClick={this.declareWinner}>{this.state.matches[0].bottomParticipant}</button>
        </div>
        <h3>Match Two</h3>
        <div>
          <button type="button" value={this.state.matches[1]} onClick={this.declareWinner}>{this.state.matches[1].topParticipant}</button>
        </div>
        <div>
          <button type="button" value={this.state.matches[1].bottomParticipant} onClick={this.declareWinner}>{this.state.matches[1].bottomParticipant}</button>
        </div>
        <h3>Match Three</h3>
        <div>
          <button type="button" value={this.state.matches[2]} onClick={this.declareWinner}>{this.state.matches[2].topParticipant}</button>
        </div>
        <div>
          <button type="button" value={this.state.matches[2].bottomParticipant} onClick={this.declareWinner}>{this.state.matches[2].bottomParticipant}</button>
        </div>
        <h3>Champion</h3>
        <div id="champ">{this.state.matches[2].winner}</div>
        <form onSubmit={this.onSubmit}>
            <div className="addParticipantForm">
                <label>Participant or Team Name: </label>
                <input type="text"
                required
                value={this.state.parName}
                onChange={this.onChangeName}
                />
            </div>
        </form>
      </div>
    )
  }
}