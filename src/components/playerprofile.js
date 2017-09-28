import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';

class PlayerProfile extends Component {
  render() {
    return(
			<CardPanel className="teal lighten-4 black-text">
					<p>{this.props.player_data.name}</p>
          <img alt='user avatar' src={this.props.player_data.avatar_url} width='100%'/>
          <p>{this.props.player_data.bio}</p>
          <p>{this.props.player_data.bio}</p>
			</CardPanel>
    );
  }
}

export default PlayerProfile;
