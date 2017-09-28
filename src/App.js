import React, { Component } from 'react';
import './App.css';
import PlayerForm from './components/playerform';
import PlayerProfile from './components/playerprofile';
import {Button, Icon} from 'react-materialize'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: [],
      player2: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/octocat')
      .then((response) => response.json())
      .then((response) => { this.setState({ player1: response })
      })
  }

   render() {
    return (
      <div>
        <h1> Versus Hub </h1>
        <PlayerForm />
        <PlayerProfile player_data={this.state.player1}/>
      </div>
    );
  }
}

export default App;
