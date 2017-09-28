import React, { Component } from 'react';
import { Button, Input, Row } from 'react-materialize';

class PlayerForm extends Component {
  lookupPlayer() {
    console.log('lookupPlayer')
  }
  render() {
    return(
      <div>
          <Input ref={(input) => {this.player1Input = input;}}/>
          <Button waves='light' onClick={() => this.lookupPlayer()}>Lookup</Button>
      </div>
    );
  }
}

export default PlayerForm;
