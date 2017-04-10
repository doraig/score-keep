/**
 * Created by ezaiuud on 4/10/2017.
 */

import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handelSubmit(event) {
        let playerName = event.target.playerName.value;
        event.preventDefault();
        if (playerName) {
            event.target.playerName.value = "";
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    render() {
        return (
            <div className="item">
            <form className="form" onSubmit={this.handelSubmit.bind(this)}>
                <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
                <button className="button">Add Player</button>
            </form>
            </div>
        );
    }
};