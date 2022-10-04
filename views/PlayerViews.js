import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.
exports.GetFingers = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ZERO')}
        >ZERO</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ONE')}
        >ONE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('TWO')}
        >TWO</button>
                <button
          disabled={!playable}
          onClick={() => parent.playHand('THREE')}
        >THREE</button>        
                <button
        disabled={!playable}
        onClick={() => parent.playHand('FOUR')}
      >FOUR</button>
              <button
        disabled={!playable}
        onClick={() => parent.playHand('FIVE')}
      >FIVE</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuessHand('ZERO')}
        >ZERO</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuessHand('ONE')}
        >ONE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuessHand('TWO')}
        >TWO</button>
                <button
          disabled={!playable}
          onClick={() => parent.playGuessHand('THREE')}
        >THREE</button>        
                <button
        disabled={!playable}
        onClick={() => parent.playGuessHand('FOUR')}
      >FOUR</button>
              <button
        disabled={!playable}
        onClick={() => parent.playGuessHand('FIVE')}
      >FIVE</button>
              <button
        disabled={!playable}
        onClick={() => parent.playGuessHand('SIX')}
      >SIX</button>
              <button
        disabled={!playable}
        onClick={() => parent.playGuessHand('SEVEN')}
      >SEVEN</button>
              <button
        disabled={!playable}
        onClick={() => parent.playGuessHand('EIGHT')}
      >EIGHT</button>
              <button
        disabled={!playable}
        onClick={() => parent.playGuessHand('NINE')}
      >NINE</button>
              <button
        disabled={!playable}
        onClick={() => parent.playGuessHand('TEN')}
      >TEN</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
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