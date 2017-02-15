import React from 'react';

export default class AppContainer extends React.Component {
  render() {
    if (!this.props.text) {
      return null;
    }

    return (
      <div className="app-wrapper">
        <h1>It Works ;) Youre @ {this.props.text} </h1>
      </div>
    );
  }
}

// PropTypes for AppContainer Component
AppContainer.propTypes = {
  text: React.PropTypes.string.isRequired,
};
