/**
 * Created by ezaiuud on 4/10/2017.
 */
import React from 'react'
import Player from './Player';
import FlipMove from 'react-flip-move'

const renderPlayers =  (playersList) => {
    return playersList.map((player) => {
        return <Player key={player._id} player={player}/>;
    });
};

export default  class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Add you first player to get  started</p>
                </div>
            );
        }
        else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>;
            });
        }
    }
    render() {
        return (
          <div>
              <FlipMove maintainContainerHeight={true}>
                  {this.renderPlayers()}
              </FlipMove>

          </div>
        );
    }
};

PlayerList.propTypes ={
    players: React.PropTypes.array.isRequired
}