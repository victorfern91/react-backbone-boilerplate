import React from 'react';

class AppContainer extends React.Component {
    render () {
        debugger;
        return (
            <div className="app-wrapper">
                <h1>It Works ;) You're @ {this.props.text}</h1>
            </div>
        );
    }
}

export default AppContainer;
