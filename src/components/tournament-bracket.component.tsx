import * as JSOG from 'jsog';
import * as React from 'react';
import * as _ from 'underscore';
import DEMO_DATA from './dummy-data';
import { Bracket, BracketGame, BracketGenerator, Model } from 'react-tournament-bracket';

const GAMES = JSOG.decode(DEMO_DATA);
const ROOT: any = _.findWhere(GAMES, { id: '35b0745d-ef13-4255-8c40-c9daa95e4cc4' });

export default class App extends React.PureComponent {
  public state = {
    homeOnTopState: true,
    hoveredTeamId: null
  };

  public render() {
    const { homeOnTopState } = this.state;
    const { gameComponent: GameComponent } = this;

    return (
      <div>


        <GameComponent game={ROOT} homeOnTop={homeOnTopState}/>

        <Bracket game={ROOT} homeOnTop={homeOnTopState} GameComponent={GameComponent}/>

        <BracketGenerator GameComponent={GameComponent} games={GAMES} homeOnTop={homeOnTopState}/>
      </div>
    );
  }

  private changeHoveredTeamId = (hoveredTeamId: string) => this.setState({ hoveredTeamId });

  private handleClick = (game: Model.Game) => alert('clicked game: ' + game.name);

  private gameComponent = (props: any) => {
    return (
      <BracketGame
        {...props}
        onHoveredTeamIdChange={this.changeHoveredTeamId}
        onClick={this.handleClick.bind(this, props.game)}
        hoveredTeamId={this.state.hoveredTeamId}/>
    );
  };
}