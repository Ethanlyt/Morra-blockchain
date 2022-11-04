import React, { useState } from 'react';
import zero from '../img/zero.jpg'
import one from '../img/1.jpg'
import two from '../img/2.jpg'
import three from '../img/3.jpg'
import four from '../img/4.jpg'
import five from '../img/5.jpg'
import '../index.css'

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.


exports.GetHand = class extends React.Component {

    render() {
        const { parent, playable, hand, round } = this.props;
        return (
            <div>
                <h2>Round {round}</h2>
                {hand ? 'It was a draw! Pick again.' : ''}
                <button
                    disabled={!playable}
                    onClick={() => parent.playHand('QUIT')}
                >
                    Surrender
                </button>
                <br />
                {!playable ? 'Please wait...' : ''}
                <br />
                <button
                    className='hover-1'
                    disabled={!playable}
                    onClick={() => parent.playHand('ZERO')}
                >
                    <img src={zero} alt="zero finger" width="200" height="400" />
                </button>
                <button
                    className='hover-1'
                    disabled={!playable}
                    onClick={() => parent.playHand('ONE')}
                >
                    <img src={one} alt="one finger" width="200" height="400" />
                </button>
                <button
                    className='hover-1'
                    disabled={!playable}
                    onClick={() => parent.playHand('TWO')}
                >
                    <img src={two} alt="two finger" width="200" height="400" />
                </button>
                <button
                    className='hover-1'
                    disabled={!playable}
                    onClick={() => parent.playHand('THREE')}
                >
                    <img src={three} alt="three finger" width="200" height="400" />
                </button>
                <button
                    className='hover-1'
                    disabled={!playable}
                    onClick={() => parent.playHand('FOUR')}
                >
                    <img src={four} alt="four finger" width="200" height="400" />
                </button>
                <button
                    className='hover-1'
                    disabled={!playable}
                    onClick={() => parent.playHand('FIVE')}
                >
                    <img src={five} alt="five finger" width="200" height="400" />
                </button>
            </div>
        );
    }
}

exports.GetSum = class extends React.Component {
    render() {
        const { parent, playable, sum ,round} = this.props;
        const guessSum = (this.state || {}).guessSum;
        return (
            <div>
                <h2>Round {round}</h2>
                <br />
                <span>The valid input should be between 0 to 10</span>
                <br />
                {sum ? 'You guess ' + sum + '. It was a draw! Pick again.' : ''}
                <br />
                {!playable ? 'Please wait...' : ''}
                <br />
                <input
                    value = {guessSum} 
                    type='number'
                    placeholder="Any number from 0 to 12"
                    required
                    onChange={(e) => this.setState({ guessSum: e.currentTarget.value })}
                    name = 'guessSum'
                    min={0}
                    max={10}
                >
                </input>
                <br />
                { guessSum >= 0 && guessSum <= 10 &&
                
                <button
                    disabled={!playable}
                    onClick={() => parent.playGuess(guessSum)}
                >Guess</button>
                }
            </div>
        );
    }
}

exports.WaitingForResults = class extends React.Component {
    render() {
        const {round} = this.props
        return (
            <div>
                <h2>Round {round}</h2>
                Waiting for results...
            </div>
        );
    }
}

exports.Done = class extends React.Component {
    render() {
        const { outcome } = this.props;
        return (
            <div>
                Thank you for playing. The outcome of this game was:
                <br />{outcome || 'Unknown'}
            </div>
        );
    }
}

exports.Info = class extends React.Component {
    render() {
        const { h1, h2, g1, g2 } = this.props;
        return (
            <div>
                <h1>Result is shown as below:</h1>
                <br />
                <br />
                Player 1 PLAY {h1 || 'Unknown'} finger
                <br />
                Player 1 GUESS {g1 || 'Unknown'} finger
                <br />
                Player 2 PLAY {h2 || 'Unknown'} finger
                <br />
                Player 2 GUESS {g2 || 'Unknown'} finger
                <br />
                <h4>The sum is {h1+h2 || 'Unknown'} </h4>
            </div>
        );
    }
}

exports.Round = class extends React.Component {
    render() {
        const { round } = this.props;
        return (
            <div>
                ROUND :{round || 'Unknown'}
            </div>
        );
    }
}

exports.Timeout = class extends React.Component {
    render() {
        return (
            <div>
                There's been a timeout. (Someone took too long.)
            </div>
        );
    }
}

export default exports;